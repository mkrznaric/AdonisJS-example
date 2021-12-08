import { DateTime } from 'luxon'
import { BaseModel, column, computed } from '@ioc:Adonis/Lucid/Orm'
import authConfig from 'Config/auth'

export default class Todo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: String

  @column()
  public is_completed: Boolean

  @column.dateTime({ autoCreate: true, serialize: (value:DateTime) => value.toFormat('dd.LL.yyyy. HH:mm')})
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serialize: (value:DateTime) => value.toFormat('dd.LL.yyyy. HH:mm') })
  public updatedAt: DateTime

@computed()
public get user(){
  return 'matej' 
}

}
