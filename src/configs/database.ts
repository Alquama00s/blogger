import mongoClient = require('mongoose')
export namespace Database{
  export async function initialize(): Promise<void> {
    const dbString = process.env.MONGO_CONN_STR
    if (dbString == null) {
      console.error('database string is null')
      process.exit(1)
    }
    try {
      await mongoClient.connect(dbString)
    } catch (error) {
      console.error('could not connect to data base')
      process.exit(1)
    }
  }
  
}
