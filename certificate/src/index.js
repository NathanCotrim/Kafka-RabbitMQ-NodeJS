import { Kafka, logLevel } from 'kafkajs';
import RabbitMQServer from './RabbitMQServer';

const kafka = new Kafka({
    brokers: ['localhost:9092'],
    clientId: 'certificate-request',
    logLevel: logLevel.WARN,
    retry: {
        initialRetryTime: 300,
        retries: 10
    }
})

const consumer = kafka.consumer({ groupId: 'certificate-group' })
const producer = kafka.producer()

async function run() {
    await consumer.connect()

    await consumer.subscribe({ topic: 'certificate-sender' })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const messageValue = JSON.parse(message.value)

            const { user } = messageValue
            const { course } = messageValue

            const certificate = {
                course: course.id,
                user: user.id,
                created_at: Date.now()
            }
            
            const serverMQ = new RabbitMQServer('amqp://admin:admin@localhost:5672')
            await serverMQ.start()
            await serverMQ.publishInQueue('Emails-Certificate', JSON.stringify({
                certificate
            }))

            await producer.connect()
            await producer.send({
                topic: 'certificate-consumer',
                messages: [
                    {
                        value: JSON.stringify({
                            message: 'Message sended to RabbitMQ Queue'
                        }),
                        timestamp: Date.now()
                    }
                ]
            }).catch(error => {
                console.log(error.message);
            })
        }
    })

   
}

run().catch(console.error)