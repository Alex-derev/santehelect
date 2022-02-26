
class appController {
    async index(req, res) {
        try {
            res.sendFile('/home/santehelect/htdocs/public/index.html');
        } catch(e) {
            res.status(400).json('Ошибка получения данных');
        }
    }
}

module.exports = new appController();