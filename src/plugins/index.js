  import PeoplePlugin from './people'
  import RideTrackerPlugin from './rideTracker'
  import ShopPlugin from './shop'


export default async server => {

  const plugins = [
    { plugin: PeoplePlugin },
    { plugin: RideTrackerPlugin },
    { plugin: ShopPlugin }
    ]

  await server.register(plugins)

}

