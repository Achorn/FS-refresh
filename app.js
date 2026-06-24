import express from 'express'
import cors from 'cors'
const app = express();



// middleware
app.use(cors());
app.use(express.json())

//sample route
app.get('/api/health', (req,res)=> {
    res.json({status:'UP', message:'ES Module backend is running!'});
});


export default app