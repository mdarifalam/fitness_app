const {getGoal, createGoal,getGoalById,updateGoal,deleteGoalById,sortGoalsbyTarget,getGoalsByType,getGoalsByDeadline} = require('../controllers/goalController');

const express = require("express");

const router = express.Router();


router.get('/',getGoal);
router.post('/',createGoal);
router.get('/:id',getGoalById);
router.put('/:id',updateGoal);
router.get('/:id',deleteGoalById);
router.get('/goals/sort/:order',sortGoalsbyTarget);
router.get('/goals/type/:type',getGoalsByType);
router.get('/goals/deadline/:deadline',getGoalsByDeadline);
module.exports = router;