import { Router } from "express";
import { getTweetController,createTweetController,deletedTweetController,updateTweetController } from "../controller/tweet.controller";


const tweetRouter = Router()


//Define the route paths

tweetRouter.get("/:tweetId", getTweetController)
tweetRouter.post("/", createTweetController)
tweetRouter.delete("/:userId",deletedTweetController)
tweetRouter.put("/", updateTweetController)


export default tweetRouter