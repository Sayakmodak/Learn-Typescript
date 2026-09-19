let userInput: unknown;
let userName: string;

const throwError = (message: string, statusCode: number): never => {
    throw {message: message, statusCode: statusCode};
}

throwError("Internal server error", 500);