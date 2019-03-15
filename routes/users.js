const NeDB = require('nedb')
const db = new NeDB({
    filename: 'data/user.db',
    autoload: true
})

module.exports = app => {
    
    const route = app.route('/users')

    route.get((req, res) => {
        
        db.find({}).sort({ name: 1 }).exec((err, users) => {
            app.utils.errors.send(err, req, res, users, 'get')
        })
    })

    route.post((req, res) => {
        if (!app.utils.validator.user(app, req, res)) return false

        db.insert(req.body, (err, user) => {
            app.utils.errors.send(err, req, res, user, 'post')
        })
    })

    const routeId = app.route('/users/:id')

    routeId.get((req, res) => {

        db.findOne({ _id: req.params.id }).exec((err, user) => {
           app.utils.errors.send(err, req, res, user, 'get')
        })
    })

    routeId.put((req, res) => {
        if (!app.utils.validator.user(app, req, res)) return false

        db.update({ _id: req.params.id }, req.body, err => {
            app.utils.errors.send(err, req, res, {}, 'put')
        })
    })

    routeId.delete((req, res) => {

        db.remove({ _id: req.params.id }, {}, err => {
            app.utils.errors.send(err, req, res, {}, 'delete')
        })
    })
}