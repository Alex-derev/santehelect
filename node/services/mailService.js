const nodemailer = require('nodemailer');

/**
 * Сервис для отправки сообщений
 *
 * @type {{getTransporter: (function(): *), sendMail: (function(*): Promise<void>|*)}}
 */
const mailService = {
    /**
     * Конфигурация SMTP
     *
     * @returns {*}
     */
    getTransporter: () => {
        return nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASSWORD,
            },
        });
    },

    /**
     * Отправка почтового сообщения
     *
     * @param data
     * @returns {*}
     */
    sendMail: data => {
        return mailService.getTransporter().sendMail(data);
    }
}

module.exports = mailService;