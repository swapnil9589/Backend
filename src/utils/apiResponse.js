class Apiresponse {
    constructor(
        statusCode,
        data = null,
        message,
        success = true

    ) {
        this.success = statusCode >= 200 && statusCode <= 500,
            this.statusCode = statusCode
        this.data = data,
            this.message = message,
            success = this.success
    }
}
export { Apiresponse }