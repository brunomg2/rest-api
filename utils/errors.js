module.exports = {

    send: (err, req, res, data = null, method) => {

        switch (method) {
            case 'get':
            case 'post':

                if (err) {

                    err(err, res)

                } else {
                    res.status(200).json({
                        data
                    })
                }
                break

            case 'put':

                if (err) {
                    err(err, res)

                } else {
                    res.status(200).json(Object.assign(req.body, req.params))
                }
                break

            case 'delete':
                if (err) {
                    error(err, res)
                } else {
                    res.status(200).json(req.params)
                }
                break
        }
    },

    error: (err, res) => {
        console.log(`Erros: ${JSON.stringify(err)}`)
        res.status(400).json({
            err
        })
    }
}