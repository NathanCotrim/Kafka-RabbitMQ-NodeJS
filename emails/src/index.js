import RabbitMQServer from "./RabbitMQServer";


async function consume() {
    const server = new RabbitMQServer('amqp://admin:admin@localhost:5672')

    await server.start()
    await server.consume('Emails-Certificate', (message) => {
        console.log(`Queue Message Received: ${message} | Email Sended`)
    })
}

consume()