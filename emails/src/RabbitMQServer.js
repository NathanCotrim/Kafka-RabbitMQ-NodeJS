import { connect } from 'amqplib';


export default class RabbitMQServer {
    constructor(uri) {
        this.uri = uri
    }

    async start() {
        this.connection = await connect(this.uri)
        this.channel = await this.connection.createChannel()
    }

    async consume(queue, callback) {
        return this.channel.consume(queue, (message) => {
            callback(String(message.content))
            this.channel.ack(message)
        })
    }
}
