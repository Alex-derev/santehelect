const nodemailer = require('nodemailer');

/**
 * Сервис для отправки сообщений
 * @class MailService
 */
class MailService {
    constructor() {
        /**
         * @protected
         * @type {*}
         */
        this.transporter = this.getTransporter();
    }

    /**
     * Конфигурация SMTP
     *
     * @returns {nodemailer.Transporter}
     */
    getTransporter() {
        return nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASSWORD,
            },
        });
    }

    /**
     * Отправка почтового сообщения
     *
     * @param data
     * @returns {*}
     */
    sendMail(data) {
        return this.transporter.sendMail(data);
    }
}

module.exports = new MailService();