export default function httpErrorFactory(status: number, message?: string) {
    return {
        status: status,
        message: message
            ? message
            : "Internal Server error."
    }
}