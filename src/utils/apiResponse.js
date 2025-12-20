class Apiresponse {
    constructor(
        statusCode,
        data = null,
        message

    ) {
        this.success = statusCode >= 200 && statusCode <= 500,
            this.statusCode = statusCode
        this.data = data,
            this.message = message
    }
}
export { Apiresponse }