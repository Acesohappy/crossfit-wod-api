const Record = require('../services/recordService');

const getRecordForWorkout = (req,res) => {
    const workoutId = req.query;
    try{
        const record = Record.getRecordForWorkout(workoutId);
        res.send({status:"OK", data:allWorkouts});
    } catch (error) {
        res.status(error?.status || 500)
           .send({status:"FAILED", data: {error: error?.message || error}});
    }
};

module.exports = { getRecordForWorkout };