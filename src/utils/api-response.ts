import { Response } from "express";

interface SuccessPayload<T> {
    success: true,
    message?: string,
    data: T
}

export function sendSucess<T>(res:Response, data:T, statusCode = 200, message?: string): void{
      const body: SuccessPayload<T> = {
        success: true,
        data
      }

      if(message) body.message = message

      res.status(statusCode).json(body)
}