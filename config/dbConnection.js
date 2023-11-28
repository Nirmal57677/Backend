const mongoose=require('mongoose')


const connectDb=async()=>{
    try {
        const connect= await mongoose.connect("mongodb+srv://Nirmaldb:Nirmal1234@cluster0.dmrfpan.mongodb.net/")
        console.log("Database is connected: ")
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports=connectDb