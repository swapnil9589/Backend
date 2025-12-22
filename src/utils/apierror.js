class Apierror extends Error {
    constructor(
        statusCode, message = "something went wrong",
        error = [],
        stack = "",
        success
    ) {
        super(message);
        this.statusCode = statusCode,
            success = false
            message = this.message,
            error = this.error
        if (stack) {
            this.stack = stack
        } else { Error.captureStackTrace(this, this.constructor) }
    }
}
export { Apierror }