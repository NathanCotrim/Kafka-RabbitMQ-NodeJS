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

// Middleware to Set kafka producer in all routes
server.use((req, res, next) => {
    req.producer = producer

    return next()
})

// Routes
server.use(routes)

async function run() {
    await producer.connect()
    
    const port = process.env.PORT || 3000
    server.listen(port, () => console.log(`server is running at port ${port}`))
}

run().catch(console.error)
