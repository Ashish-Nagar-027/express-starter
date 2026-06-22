import type { NextFunction, Request, Response } from "express";
import { sendSucess } from "../utils/api-response";

export const pingController = async (_req:Request, res:Response, _next:NextFunction) => {
    console.log("Ping request recived")
    sendSucess(res, "", 200,"Pong!")
}