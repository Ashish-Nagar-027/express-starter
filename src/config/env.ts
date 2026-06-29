import 'dotenv/config'


// server
export const PORT = process.env.PORT || 8080
export const NODE_ENV = process.env.NODE_ENV || 'development'
export const BASE_URL = process.env.BASE_URL || ""

// DATABASE
export const DB_URL = process.env.DB_URL || ""

// # JWT_SECRET
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || ""

// CLIENT
export const CLIENT_URI = process.env.CLIENT_URI || ""


// REDIS
export const REDIS_URL = process.env.REDIS_URL || ""

