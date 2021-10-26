const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const shortid = require("shortid");
const Poll = require("../model/Poll");
const Question = require("../model/Question");
const Answer = require("../model/Answer");

// Fetch all polls
router.get("/", async (req, res) => {
    try {
        const polls = await Poll.find({});
        res.status(200).send({ polls: polls });
    } catch {
        res.status(400).send("Some error occured");
    }
});

// Fetch all questions
router.get("/questions", async (req, res) => {
    try {
        const questions = await Question.find({});
        res.status(200).send({ questions: questions });
    } catch {
        res.status(400).send("Some error occured");
    }
});

// Fetch all answers
router.get("/answers", async (req, res) => {
    try {
        const answers = await Answer.find({});
        res.status(200).send({ answers: answers });
    } catch {
        res.status(400).send("Some error occured");
    }
});

// Create new poll
router.post("/create", (req, res) => {
    try {
        const newPoll = new Poll({
            id: uuidv4(),
            pollName: req.body.pollName,
            pollDescription: req.body.pollDescription,
            createdBy: req.body.createdBy,
            timeToActivate: req.body.timeToActivate,
            timeToDeactivate: req.body.timeToDeactivate,
            isActive: req.body.isActive,
            urlId: shortid.generate(),
            questions: req.body.questions,
            adminPanel: req.body.adminPanel,
        });

        newPoll
            .save()
            .then((_) => res.status(200).send("Poll successfully created."))
            .catch((e) => console.log(e));
    } catch (e) {
        console.error(e);
        res.status(400).send("Couldn't create poll with the provided data.");
    }
});

// Add question to a poll
router.post("/addQuestion", (req, res) => {
    try {
        const newQuestion = new Question({
            id: uuidv4(),
            pollId: req.body.pollId,
            content: req.body.content,
            options: req.body.options,
            totalPolls: req.body.totalPolls,
            result: req.body.result,
        });
        newQuestion
            .save()
            .then(async (_) => {
                const currPoll = await Poll.findOne({ id: req.body.pollId });
                currPoll.questions.push(newQuestion.id);
                const res = await currPoll.save();
                return res;
            })
            .then((_) => res.status(200).send("Question added successfully."));
    } catch (e) {
        console.error(e);
        res.status(400).send("Couldn't add question.");
    }
});

// Add answer to a question
router.post("/addAnswer", (req, res) => {
    try {
        const newAnswer = new Answer({
            id: uuidv4(),
            questionId: req.body.questionId,
            content: req.body.content,
            totalPolls: req.body.totalPolls,
        });

        newAnswer
            .save()
            .then(async (_) => {
                const currQues = await Question.findOne({
                    id: req.body.questionId,
                });
                currQues.options.push(newAnswer.id);
                const res = await currQues.save();
                return res;
            })
            .then((_) => res.status(200).send("Answer added successfully."));
    } catch (e) {
        console.error(e);
        res.status(400).send("Couldn't add answer.");
    }
});

module.exports = router;
