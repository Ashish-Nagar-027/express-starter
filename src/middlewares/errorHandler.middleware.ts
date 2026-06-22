import type { Request, Response , NextFunction} from "express";
import { ApiError } from "../utils/api-error";



export function errorHandler(err: Error, _req:Request, res: Response, next: NextFunction){
       console.log(`[error]:`,err)

       if(err instanceof ApiError){
        const body: Record<string, unknown> = {
            success: false,
            message: err.message
        }
        if(err.details) body.details = err.details
         res.status(err.statusCode).json(body)
        return
    }

       res.status(500).json({
        success: false,
        message: "Something Went Wrong"
       })
}