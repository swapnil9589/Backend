class Apierror extends Error {
    constructor(
        statusCode, message = "something went wrong", errer = [], stack = "", success
    ) {
        super(message);
        this.statusCode = statusCode,
            success = false
        if (stack) {
            this.stack = stack
        } else { Error.captureStackTrace(this, constructor) }
    }
}
export { Apierror }