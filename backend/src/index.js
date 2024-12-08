import express, { json } from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js"
dotenv.config()

const app = express()
const PORT = process.env.PORT
const BASE_CLIENT_URL = process.env.BASE_CLIENT_URL

app.use(json({ limit: "50mb" }))
app.use(cors({
    origin: BASE_CLIENT_URL,
    credentials: true
}))
app.use(cookieParser())
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

app.listen(PORT, () => {
    console.log("server running on port: ", PORT)
    connectDB()
})