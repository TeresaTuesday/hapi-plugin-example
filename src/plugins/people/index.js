import Joi from 'joi'
import pkg from './package'

export default {
  // name: 'people',
  // version: '1.0.0',
  pkg,
  async register(server, options = {}) {
    server.route([
      {
        method: 'GET',
        path: '/v1/people',
        options: {
          tags: ['api']
        },
        async handler(request, h) {
          return []
        }
      },
      {
        method: 'POST',
        path: '/v1/people',
        options: {
          tags: ['api'],
          validate: {
            payload: {
              firstName: Joi.string().required(),
              lastName: Joi.string().required(),
              email: Joi.string().email().trim().lowercase().required(),
              age: Joi.number().min(0).max(120).required()
            }
          }
        },
        async handler(request, h) {
          const person = request.payload
          return person
        }
      }
    ])
  }
}
