import mongoose from "mongoose";

export const  connectDB = async () =>{

	const dbUrl = process.env.DB_URI;
    await mongoose
		.connect(dbUrl)
		.then(() => console.log("DB Connected"));
   
}
