import mongoose from 'mongoose'
const connect = () => {
  try {
    mongoose.set('strictQuery', true)

    mongoose.connect(process.env.MONGO, {})
    mongoose.connection.on('open', () => console.log('connected successfully'))
  } catch (error) {
    console.log(error)
  }
}

export default connect
