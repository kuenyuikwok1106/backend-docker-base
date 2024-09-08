import 'dotenv/config'
import  mongoose from 'mongoose';

const user = process.env.MONGO_USER
const password = process.env.MONGO_PASSWORD
const port = process.env.MONGO_PORT
const db = process.env.MONGO_DB

const mongo = await mongoose.connect(
    `mongodb://${user}:${password}@localhost:${port}/${db}?authSource=admin`
);

export default mongo;
