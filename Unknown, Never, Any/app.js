"use strict";
let userInput;
let userName;
const throwError = (message, statusCode) => {
    throw { message: message, statusCode: statusCode };
};
throwError("Internal server error", 500);
