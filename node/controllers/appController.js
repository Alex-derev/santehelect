
class appController {
    index(req, res) {
        res.render('home', {title: 'Santehelect'});
    }

    service(req, res) {
        res.render('home', {title: 'Услуги'});
    }
}

module.exports = new appController();