import type { NextFunction, Request, Response } from "express"
import { notFound } from "../utils/api-error"


export const routeNotFound =(_req:Request, res: Response, next: NextFunction) =>{
    next(notFound("Route not found"))
}