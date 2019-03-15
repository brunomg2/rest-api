module.exports = {
    user: (app, req, res) => {
        req.assert('name', 'O nome é obrigatorio').notEmpty()
        req.assert('email', 'E-mail Invalido').notEmpty().isEmail()

        const errors = req.validationErrors()

        if (errors) {
            app.utils.errors.error(errors, res)
            return false
        } else {
            return true
        }
    }
}