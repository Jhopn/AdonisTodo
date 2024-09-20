import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task'

export default class TasksController {
  public async index({auth}:HttpContextContract) {
    const user = await auth.authenticate()
    const tasks = await Task.query().where('user_id', user.id)
    return tasks
  }

  public async store({request, auth}:HttpContextContract) {
    const user = auth.authenticate()
    const {task} = request.only(['task'])
    const taskReturn = (await user).related("task").create({task})
    return taskReturn
  }
}
