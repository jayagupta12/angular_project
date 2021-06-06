const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const QuestionSchema = new Schema(

    {
        id: ObjectId,
        ques: { type: String, required: true },
        ans: { type: String, required: true },
        option: [String],

    });


const userQuestionSchema = new Schema(
    {
        name: { type: String, required: true },
        uId: { type: String, required: true },
        question: [QuestionSchema]


    }
)

const friendScore = new Schema(
    {
        name: { type: String, required: true },
        score: { type: String, required: true },
        quizId: { type: String, required: true }

    }
);
var Question = mongoose.model('question', QuestionSchema);
var UserQuestion = mongoose.model('userQuestion', userQuestionSchema)
var FriendScore=mongoose.model('friendScore',friendScore)
module.exports = { Question, UserQuestion ,FriendScore};