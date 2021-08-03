import express from 'express';
import { Kafka, logLevel } from 'kafkajs';
import { routes } from './routes';

const server = express();

// Kafka config
const kafka = new Kafka({
    clientId: 'api',
    brokers: ['localhost:9092'],
    logLevel: logLevel.WARN,
    retry: {
        initialRetryTime: 300,
        retries: 10
    }
})

const producer = kafka.producer()
const consumer = kafka.consumer({ groupId: 'certificate-consume' })

// Middleware to Set kafka producer in all routes
server.use((req, res, next) => {
    req.producer = producer

    return next()
})

// Routes
server.use(routes)

async function run() {
    await producer.connect()
    await consumer.connect()

    await consumer.subscribe({ topic: 'certificate-consumer' })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(JSON.parse(message.value), {
                TOPIC: topic,
                PARTITION: partition
            });
        }
})
    const port = process.env.PORT || 3000
    server.listen(port, () => console.log(`server is running at port ${port}`))
}

run().catch(console.error)
