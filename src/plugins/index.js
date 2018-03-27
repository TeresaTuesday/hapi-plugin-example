import PeoplePlugin from './people'


export default async server => {

  const plugins = [
    { plugin: PeoplePlugin }
  ]

  await server.register(plugins)

}
