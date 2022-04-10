const mailService = require('../services/MailService');

class apiController {
    async sendMail(req, res) {
        try {
            const result = await mailService.sendMail({
                from: 'От',
                to: '',
                subject: 'Title',
                text: 'Message',
                html: 'This <i>message</i> was sent from <strong>Node js</strong> server.',
            })

            res.json(result);
        } catch(e) {
            res.status(400).json(e.message);
        }
    }
}

module.exports = new apiController();