import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(` mongodb+srv://rathinamakshaya4:<db_password>@cluster0.tvsyfbn.mongodb.net/food-del`).then(()=>console.log("DB Connected"))
}