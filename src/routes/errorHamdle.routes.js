const  { logError, errorHandle} = require('../middlewares/error.handler')

const errorHandlerRouter = () =>{
    app.use(logError)
    app.use(errorHandle)
}


module.exports = errorHandlerRouter