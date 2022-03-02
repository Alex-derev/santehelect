
class appController {
    async index(req, res) {
        try {
            res.sendFile(`${process.env.BASE_URL}/index.html`);
        } catch(e) {
            res.status(400).json('Ошибка получения данных');
        }
    }
}

module.exports = new appController();