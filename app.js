require('express-async-errors');
const mongoose = require('mongoose')
const express = require('express');
const app = express();
const dotenv = require('dotenv')


//routers
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')


// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());
// extra packages

// routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);



//env process
dotenv.config();
const PORT = process.env.PORT || 4000
const MONGO_URI = process.env.MONGO_URI


const connect = async() =>{
  try {
    await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });

    console.log("DB connected succesfully!");
    app.listen(PORT, ()=>{
      console.log(`Server running on port ${PORT}`);
    })
  } catch (error) {
    console.log(error);
  }
}


connect()

