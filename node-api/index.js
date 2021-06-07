const express = require('express');
const mongoose = require('mongoose');
const app = express();
const uri = "mongodb+srv://jaya:jayagupta123@cluster0.eggmb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var dbService = require('./database_service')
const cors = require('cors');
app.use(cors())
app.use(express.json())


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true

}).then((res) => {
    console.log("connected")
}).catch(err => console.error(err))




app.post('/addQuestion', async (req, res) => {

    try {
        let ques=req.body
        let resp = await dbService.saveQuestion(ques)
        res.send(resp);

    } catch (error) {
        res.send(error)
    }

})
var nanoId = require('nanoid')

app.get('/getquestion', async (req, res) => {
    try {
        let resp = await dbService.getQuestion();
        res.send(resp)
    } catch (error) {
        res.send(error)
    }

})
app.post('/saveUserQuestion', async (req, res) => {

    try {
  

        let uId = nanoId.nanoid(10);
        console.log(req.body)
        let payload = {
            name: req.body.name,
            uId,
            question: req.body.question
        };
        let resp = await dbService.saveUserQuestion(payload);
        console.log(resp);
        res.json({ id: uId });

    } catch (error) {
        res.send(error)
    }
})
app.post('/getUserQuestion', async (req, res) => {
    try {
        console.log(req.body)
        let friendId=req.body.friendId
        let resp = await dbService.getUserQuestion(friendId)
        res.send(resp)
    } catch (error) {
        res.send(error)
    }
})



app.post('/getFriendScore', async (req, res) => {
    try {
        console.log(req.body)
        let id = req.body.id
        let resp = await dbService.getFriendScore(id)
        res.send(resp)
    } catch (error) {
        res.send(error)
    }
})
app.post('/save', async (req, res) => {
    try {


        let friendResp=req.body
        let resp = await dbService.saveFriendScore(friendResp)
        console.log(resp)
        res.json(resp.toObject())
    } catch (error) {
        res.send(error)
    }
})
app.listen(3000);