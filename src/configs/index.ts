import { Environment } from './environment'
import { Database } from './database'

export async function configure(): Promise<void> {
  Environment.initialize()
  await Database.initialize()
}

