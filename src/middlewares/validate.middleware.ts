import type { Request, Response, NextFunction } from "express";
import {z} from 'zod'
import { badRequest } from "../utils/api-error";


/**
 * 
 * @param schema - Zod schema to validate the request body
 * @returns - Middleware function to validate the request body
 */

export function validateRequiestBody(schema: z.ZodSchema) {
  return (req:Request, _res:Response, next:NextFunction) => {
    const result = schema.safeParse(req.body)

    if(!result.success){
        throw badRequest("Validation failed", result.error.issues)
    }

    req.body = result.data

    next()
  }
}

/**
 * 
 * @param schema - Zod schema to validate the req query params
 * @returns - Middleware function to validate the request query params
 */
export function validateQueryParams(schema: z.ZodSchema) {
  return (req:Request, _res:Response, next:NextFunction) => {
    const result = schema.safeParse(req.query)

    if(!result.success){
        throw badRequest("Validation failed", result.error.issues)
    }

    req.body = result.data

    next()
  }
}

/**
 * 
 * @param schema - Zod schema to validate the request params
 * @returns - Middleware function to validate the request params
 */
export function validateRequestParams(schema: z.ZodSchema) {
  return (req:Request, _res:Response, next:NextFunction) => {
    const result = schema.safeParse(req.params)

    if(!result.success){
        throw badRequest("Validation failed", result.error.issues)
    }

    req.body = result.data

    next()
  }
}

