const DB = require("./db.json");
const save = require("./utils");
const fs = require("fs");

const getAllWorkouts = () => {
  return DB.workouts;
};

const getOneWorkout = (workoutId) => {
  try {
    const oneWorkout = DB.workouts.find((item) => item.id === workoutId);
    return {
      status: "OK",
      data: oneWorkout,
    };
  } catch (error) {
    return {
      status: "ERROR",
      data: error,
    };
  }
};

const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded = DB.workouts.findIndex(
    (workout) => workout.name === newWorkout.name
  );

  if (isAlreadyAdded > -1) {
    return;
  }

  DB.workouts.push(newWorkout);
  save.saveToDatabase(DB);
  return newWorkout;
};

const deleteWorkout = (delWorkout) => {
  try {
    const workoutFinded = DB.workouts.findIndex(
      (workout) => workout.id == delWorkout
    );

    if (workoutFinded !== -1) {
      DB.workouts.splice(workoutFinded, 1);
      save.saveToDatabase(DB);
    }
    return {
      status: "OK",
      message: `Delete workout ${delWorkout}`,
    };
  } catch (error) {
    return {
      status: "ERROR",
      message: error,
    };
  }
};

const update_Workout = (workoutId, updatedWorkoutData) => {
  try {
    const workoutIndex = DB.workouts.findIndex((workout) => workout.id === workoutId);

    if (workoutIndex === -1) {
      return {
        status: 'ERROR',
        message: 'Workout not found'
      };
    }
     // Actualizar los datos del workout con los nuevos datos proporcionados
     const updatedWorkout = {
      ...DB.workouts[workoutIndex],
      ...updatedWorkoutData,
      updatedAt: new Date().toLocaleString() // Actualizar la fecha de actualización
    };

    // Reemplazar el workout antiguo con el nuevo en la base de datos
    DB.workouts[workoutIndex] = updatedWorkout;
    save.saveToDatabase(DB); // Guardar los cambios en la base de datos

    return {
      status: 'OK',
      message: 'Workout updated successfully',
      data: updatedWorkout
    };
  } catch (error) {
    return {
      status: 'ERROR',
      message: 'Failed to update workout',
      error: error.message
    };
  }
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  deleteWorkout,
  update_Workout
};
