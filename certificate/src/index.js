import { Kafka, logLevel } from 'kafkajs';
import { pdfGeneration } from './pdfGeneration';

import mongoose from 'mongoose';
import { RabbitMQServer } from './RabbitMQServer';

mongoose.connect('mongodb://localhost:27017/micro-service', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // auth: {
    //     user: 'root',
    //     password: 'certificate',
    // }
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
            console.log(message);
            
            // // const pdf = pdfGeneration(message.value.user, message.value.course)
            // const serverMQ = new RabbitMQServer('amqp://admin:admin@rabbitmq:5672')
            // console.log('oi');
            // await serverMQ.start()

            // await serverMQ.publishInQueue('Emails-Certificate', JSON.stringify({
            //     // pdf,
            //     user: message.value.user,
            //     course: message.value.course
            // }))
        }
    })
}

run().catch(console.log('error'))