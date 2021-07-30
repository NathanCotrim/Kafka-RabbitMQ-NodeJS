import { Router } from 'express';
const routes = Router()

routes.post('/certificate', async (req, res) => {
    const { producer } = req

    await producer.send({
        topic: 'certificate-sender',
        messages: [
            {
                value: JSON.stringify({
                    user: { id: 2, name: "nathan", email: 'nathan.cotrim@gmail.com' },
                    course: {
                        name: 'Nodejs + Kafka + MQ',
                        id: 5
                    }
                }),
                timestamp: Date.now()
            }
        ]
    })
    
    
    return res.json({
        status: "generated successfully"
    })
})


export { routes }