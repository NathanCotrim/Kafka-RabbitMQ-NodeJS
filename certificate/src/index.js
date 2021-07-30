import { Kafka, logLevel } from 'kafkajs';

import { pdfGeneration } from './pdfGeneration';

import RabbitMQServer from './RabbitMQServer';

import mongoose from 'mongoose';
import { Certificate } from './models/Certificate'

mongoose.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'micro-service',
    user: 'root',
    pass: 'certificate'    
})

const kafka = new Kafka({
    brokers: ['localhost:9092'],
    clientId: 'certificate',
    logLevel: logLevel.WARN,
    retry: {
        initialRetryTime: 300,
        retries: 10
    }
})

const consumer = kafka.consumer({ groupId: 'certificate-group' })

async function run() {
    await consumer.connect()

    await consumer.subscribe({ topic: 'certificate-sender' })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const messageValue = JSON.parse(message.value)

            const { user } = messageValue
            const { course } = messageValue

            const pdf = await pdfGeneration(user, course)
            
            await Certificate.create({
                pdf,
                course_id: course.id ,              
                user_id: user.id,
            })
            
            const serverMQ = new RabbitMQServer('amqp://admin:admin@localhost:5672')
            await serverMQ.start()

            await serverMQ.publishInQueue('Emails-Certificate', JSON.stringify({
                pdf,
                user,
                course
            }))
        }
    })
}

run().catch(console.error)