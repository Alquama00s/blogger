import dotenv = require('dotenv')
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Environment {
  const envVariables = ['PORT', 'MONGO_CONN_STR']
  export const initialize = (): any => {
    dotenv.config()
    envVariables.forEach((element) => {
      if (process.env[element] == null) {
        console.log(`${element} was null`)
      }
    })
  }
}
