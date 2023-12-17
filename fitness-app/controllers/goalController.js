const Goal = require('../models/goalModel');


const getGoal = async(req,res)=>{
    
    try{
        const goal = await Goal.find();
        if(!goal){
           res.status(404).json({err:" goals not found!"})
        }
        res.status(200).json(goal);
    }catch(err){
        res.status(500).json({err:"Internal server error!"});
    }
}

const createGoal = async(req,res)=>{
    const {firstname,description,target,deadline,type} =req.body;
    console.log(firstname);
    try{
        const existGoal = await Goal.findById(req.params.id);
        if(existGoal){
           res.status(404).json({err:" goal is already existing !"})
        }
        const newGoal = new Goal({
            firstname,
            description,
            target,
            deadline,
            type
        });
        const savedGoal =  await newGoal.save();
        
        res.status(201).json({ message: 'Goal added successfully', goal: savedGoal });
    }catch(err){
        res.status(500).json({err:"Internal server error!"});
    }
    
}
const updateGoal = async(req,res)=>{
    
    const {firstname,description,target,deadline} =req.body;
    try{
        const goalId = req.params.id;
        if(!goalId){
            res.status(404).json({"message": "Goal not found"});
        }
        const goal = await Goal.findByIdAndUpdate(goalId,{firstname,description,target,deadline},{new:true})
        res.status(200).json({ message: 'Goal added successfully', goal: goal });
    }catch(err){
        res.status(500).json({err:"Internal server error!"});
    }

}
const deleteGoalById = async(req,res)=>{

    try{
        const goalId = req.params.id;
        if(!goalId){
            res.status(404).json({"message": "Goal not found"});
        }
        const goal = await Goal.findByIdAndDelete(goalId)
        res.status(200).json({ message: 'Goal deleted successfully', goal: goal });
    }catch(err){
        res.status(500).json({err:"Internal server error!"});
    }

}

const getGoalById = async(req,res)=>{
     const goalId = req.params.id;
     try{
        const goal = await Goal.findById(goalId);
        if(!goal){
            res.status(404).json({err:" goal does not exist!"})
        }
        res.status(200).json(goal);
     }catch(err){
        res.status(500).json({err:"Internal server error!"});
    }
    
};

const sortGoalsbyTarget = async(req,res)=>{
          const order = req.params.order==='desc'?-1:1;
          try{
            const sortedGoal = await Goal.find().sort({target:order});
            if(!sortedGoal){
                res.status(404).json({err:" goal does not exist!"})
            }
            res.status(200).json(sortedGoal);
         }catch(err){
            res.status(500).json({err:"Internal server error!"});
        }
}

const getGoalsByType = async(req,res)=>{
    const goalType = req.params.type
          try{
            const goals = await Goal.find({type:goalType});
            if(!goals){
                res.status(404).json({err:" goal does not exist!"})
            }
            res.status(200).json(goals);
         }catch(err){
            res.status(500).json({err:"Internal server error!"});
        }
}

const getGoalsByDeadline = async(req,res)=>{
    const deadline = new Date(req.params.deadline);
          try{
            const goals = await Goal.find({deadline:{$lte:deadline}});
            if(!goals){
                res.status(404).json({err:" goal does not exist!"})
            }
            res.status(200).json(goals);
         }catch(err){
            res.status(500).json({err:"Internal server error!"});
        }
}

module.exports ={
    getGoal,
    createGoal,
    getGoalById,
    updateGoal,
    deleteGoalById,
    sortGoalsbyTarget,
    getGoalsByType,
    getGoalsByDeadline,
}
