import mongoose from "mongoose";
import UserModel from "../databases/models/user.model";
import { IUserInterface} from "../databases/interfaces/user.interface";

export const getUserRepo =async(userId: string): 
Promise<IUserInterface | null>=>{
try{
    const user =await UserModel.findOne({uid: userId})
}catch(error){
    console.log(error);
    return null
}};