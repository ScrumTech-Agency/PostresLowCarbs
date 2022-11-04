ErrorHandler

class ErrorHandler extends Error{
  constructor (message, statusCode){
    this.statusCode= statusCode

    Error.captureStackTrace(this, this.constructor)
  }
  
}
module.exports= ErrorHandler
