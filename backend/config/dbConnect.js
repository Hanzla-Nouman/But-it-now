import mongoose from "mongoose";

export const dbConnect = ()=>{
    if(mongoose.connection.readyState >= 1){
        return
    }
    mongoose.connect(process.env.DB_URI)
}