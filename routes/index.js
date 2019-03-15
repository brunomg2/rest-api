module.exports = app => {
    app.get('/', (req, res) => {
        res.status(200)
        res.setHeader('Contet-Type', 'text/html')
        res.end('<h1>Seja Bem Vindo!!!</h1>')
    })
}