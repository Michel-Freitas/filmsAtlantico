export type HttpErrorResponse = {
    status: number;
    message: string;
}

export enum ExceptionType {
    NOT_FOUND = 404,
    BAD_REQUEST = 400
}