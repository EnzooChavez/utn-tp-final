import { connect } from "mongoose"

export const connectDB = async () => {
    try {
        await connect("mongodb://127.0.0.1:27017/backend")
        console.log("Database connected")
    } catch (error) {
        console.error("Error connecting to database", error)
        process.exit(1)
    }
}