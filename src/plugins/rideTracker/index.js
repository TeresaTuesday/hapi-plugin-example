import Joi from 'joi'
import pkg from './package'

export default {
  // name: 'rideTracker',
  // version: '1.0.0',
  pkg,
  async register(server, options = {}) {
    server.route([
      {
        method: 'GET',
        path: '/v1/ride',
        options: {
          tags: ['api']
        },
        async handler(request, h) {
          return []
        }
      },
      {
        method: 'POST',
        path: '/v1/ride',
        options: {
          tags: ['api'],
          validate: {
            payload: {
              name: Joi.string().required(),
              imgURL: Joi.string().required(),
              loc: Joi.string().required(),
              desc: Joi.string().required(),
              height: Joi.number().min(0).max(1000).required()
            }
          }
        },
        async handler(request, h) {
          const ride = request.payload
          return ride
        }
      }
    ])
  }
}
