
class appController {
    index(req, res) {
        res.render('home', {title: 'Santehelect'});
    }
}

module.exports = new appController();