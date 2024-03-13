exports.getData = (req, res) => {
    console.log('entra')
    res.send({
        data: 'esta es la ruta'
    })
}