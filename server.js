
import 'dotenv/config' // automatic load environment variables
import mongoose from 'mongoose'
import app from './app.js';

const dbUri = process.env.MONGODB_URI
const PORT = process.env.port || 3000;

const startServer = async () => {
    try {
        await mongoose.connect(dbUri)
        console.log('✅ Successfully connected to MongoDb')

        app.listen(PORT, () => {
            console.log(`🚀 server spinning on port http://localhost:${PORT}`)
        })
    }
    catch{
        console.error('❌ connection failed:', error.message)
    }  
}


startServer()
