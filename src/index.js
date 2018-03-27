import { Server } from 'hapi'
import ConfigurePlugins from './configuration/plugins'
import CustomPlugins from './plugins'

const env = process.env.NODE_ENV || 'development'
const port = process.env.PORT || 5000

/**
 * Sets up the server with plugins and defaults
 *
 * Doesn't start the server
 *
 * @returns {Promise<Server>}
 */
export default async () => {

  const options = {
    router: {
      isCaseSensitive: false,
    },
    routes: {
      cors: true,
      validate: {
        options: {
          abortEarly: false
        }
      }
    },
  }

  if (env !== 'testing') {
    options.port = port
  }

  const server = new Server(options)

  // Load Plugins
  await ConfigurePlugins(server)
  await CustomPlugins(server)

  await server.initialize()

  return server
}
