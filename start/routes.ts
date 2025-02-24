import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'Server Running...' }
})

Route.post("/session", 'SessionsController.store')
Route.delete("/session", 'SessionsController.destroy').middleware('auth')

Route.resource('/user', 'UsersController').apiOnly()

Route.group(() =>{
  Route.resource('/task', 'TasksController').apiOnly()
}).middleware('auth')


