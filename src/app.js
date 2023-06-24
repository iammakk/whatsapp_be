import express from "express"
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import ExpressMongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import compression from "compression";
import fileUpload from "express-fileupload";
import cors from "cors";

dotenv.config();

const app = express();
if(process.env.NODE_ENV !== "production"){

    app.use(morgan("dev"));
}
app.use(helmet());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(ExpressMongoSanitize())
app.use(cookieParser())
app.use(compression())
app.use(fileUpload({
    useTempFiles:true,

}))
app.use(cors())









export default app