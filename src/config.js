import dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT || 3008;
export const MONGODB_URI = process.env.MONGODB_URI;
export const SECRET = process.env.SECRET