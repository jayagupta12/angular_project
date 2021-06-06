const { get } = require('https');
const mongoose=require('mongoose')
const {Question,UserQuestion,FriendScore}=require('./model/question')
const getQuestion=async()=>{
let result= await Question.find();
return result;
}
const saveQuestion=async(data)=>{
let result=await Question(data).save()
return result
}

const saveUserQuestion=async(data)=>{
    let result=await UserQuestion(data).save()
    return result
}

const getUserQuestion=async(data)=>{
    let result =await UserQuestion.findOne({uId:data})
    return result
}
const saveFriendScore=async(data)=>{
    let result=await FriendScore(data).save();
    return result 
}

const getFriendScore=async(id)=>{

    let result =await FriendScore.find({quizId:id})
    return result
}
module.exports={getQuestion,saveQuestion,saveUserQuestion,getUserQuestion,saveFriendScore,getFriendScore}
