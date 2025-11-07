const db = require('./db.json');
const {saveToDatabase} = require('./utils');

const getAllWorkouts = () => {
    return db.workouts;
};

const createNewWorkout = (newWorkout) => {
    const isAlreadyAdded =
          db.workouts.findIndex((workout) => workout.name === newWorkout.name )>-1;
    if(isAlreadyAdded){
        return;
    }
    db.workouts.push(newWorkout);
    saveToDatabase(db);
    return newWorkout;
}

module.exports = {
    getAllWorkouts,
    createNewWorkout
};