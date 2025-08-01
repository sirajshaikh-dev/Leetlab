//index.js
import express from 'express';
import dotenv from 'dotenv';    
import cookieParser from 'cookie-parser'


import authRoutes from './routes/auth.routes.js';
import problemRoutes from './routes/problem.routes.js';
import executionRoute from './routes/executeCode.routes.js';

dotenv.config(); 

const app = express();
app.use(express.json())
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send('welcome to leetlab')
})

app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/problems',problemRoutes)
app.use('/api/v1/execute-code',executionRoute)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
