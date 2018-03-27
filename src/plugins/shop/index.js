import Joi from 'joi'
import pkg from './package'

export default {
  // name: 'product',
  // version: '1.0.0',
  pkg,
  async register(server, options = {}) {
    server.route([
      {
        method: 'GET',
        path: '/v1/product',
        options: {
          tags: ['api']
        },
        async handler(request, h) {
          return []
        }
      },
      {
        method: 'POST',
        path: '/v1/product',
        options: {
          tags: ['api'],
          validate: {
            payload: {
              name: Joi.string().required(),
              imgURL: Joi.string().required(),
              desc: Joi.string().required(),
              price: Joi.number().min(0).max(10000).required()
            }
          }
        },
        async handler(request, h) {
          const product = request.payload
          return product
        }
      }
    ])
  }
}
