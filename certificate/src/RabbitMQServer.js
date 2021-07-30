import { connect } from 'amqplib';


export default class RabbitMQServer {
    constructor(uri) {
        this.uri = uri
    }

    async start() {
        console.log('oi');
        this.connection = await connect(this.uri)
        console.log('oi');
        this.channel = await this.connection.createChannel()
    }

    async publishInQueue(queue, message) {
        return this.channel.sendToQueue(queue, Buffer.from(message))
    }
} 