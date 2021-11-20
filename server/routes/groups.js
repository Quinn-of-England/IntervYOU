import { Router } from 'express'
import * as groupController from '../controllers/groups.js'

const groupRouter = Router()

//Create - Create group
groupRouter.post("/create", groupController.create_group)

//Read - Get all groups
groupRouter.get('/', groupController.get_all_groups)

//Read - Get group by id
groupRouter.get("/id/:id", groupController.get_group_by_id)

//Read - Get group by name
groupRouter.get("/name/:name", groupController.get_group_by_name)

//Update - Update follower count
groupRouter.patch("/count/:name", groupController.update_follower_count_with_name)

//Update - Update group by id
groupRouter.patch(":id",groupController.update_group_with_id);

//Update - Update group for following status
//groupRouter.patch("/:name", groupController.update_group_status)

//Delete - By id
groupRouter.delete("/id/:id", groupController.delete_group_by_id)

//Delete - By name
groupRouter.delete("/name/:name", groupController.delete_group_by_name)

export default groupRouter