import 'dotenv/config'
import { createClient } from 'redis';


/* create and open the Redis OM Client */
const redis = createClient({
    port: process.env.REDIS_PORT,
    url: process.env.REDIS_URL,
    password: process.env.REDIS_PASSWORD,
    enable_offline_queue: false
})

redis.on('error', (err) => console.log('Redis Client Error', err));
await redis.connect()

export default redis