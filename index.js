import express from 'express'
import cors from 'cors'
import 'dotenv/config' // automatic load environment variables
import mongoose from 'mongoose'
import {MongoClient} from 'mongodb'
const app = express();
const PORT = process.env.port || 3000;


const dbUri = process.env.MONGODB_URI
// const uri = 'mongodb+srv://joshuaachorn_db_user:EGs7rRVnwrDaC20G@cluster0.hl6qfml.mongodb.net/?appName=Cluster0'
// const client = new MongoClient(uri)

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

// middleware
app.use(cors());
app.use(express.json())

//sample route
app.get('/api/health', (req,res)=> {
    res.json({status:'UP', message:'ES Module backend is running!'});
});


startServer()
