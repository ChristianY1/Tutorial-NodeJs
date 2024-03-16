const Workout = require("../database/Workout");
const {v4: uuid} = require('uuid');


const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
};
const getOneWorkout = (workoutId) => {
  const oneWorkout = Workout.getOneWorkout(workoutId);
  return oneWorkout;
};
const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    id: uuid(),
    ...newWorkout,
    createdAt: new Date().toLocaleString("en-Us", {timezone: "UTC"}),
    updatedAt: new Date().toLocaleString("en-Us", {timezone: "UTC"}),
  }
  const createdNewWorkout = Workout.createNewWorkout(workoutToInsert);
  return createdNewWorkout;
};
const updateOneWorkout = (workoutId, updatedWorkoutData) => {
  const updatedWorkout = Workout.update_Workout(workoutId, updatedWorkoutData)
  return updatedWorkout;
};
const deleteOneWorkout = (delWorkout) => {
  const deletedWorkout = Workout.deleteWorkout(delWorkout);
  return deletedWorkout;
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
}