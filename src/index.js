import dotenv from "dotenv";
import app from "./app.js";
import logger from "./configs/logger.config..js";


dotenv.config();




app.listen(process.env.PORT , ()=>{

    logger.info(`server is listening at ${process.env.PORT}`);
    })