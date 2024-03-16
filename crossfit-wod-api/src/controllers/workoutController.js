const workoutService = require("../services/workoutService");

const getAllWorkouts = (request, response) => {
  console.log('si llega')
  const allWorkouts = workoutService.getAllWorkouts();
  response.send({ status: "OK", data: allWorkouts });
};

const getOneWorkout = (request, response) => {
  console.log('llega aca')
  const oneWorkout = workoutService.getOneWorkout(request.params.workoutId);
  response.send(oneWorkout);
};

const createNewWorkout = (request, response) => {
  const { body } = request;

  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return response.status(400).send({
      status: "Error",
      message: "Missing required fields in request body",
    });
  }
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };

  const createdNewWorkout = workoutService.createNewWorkout(newWorkout);
  response.status(201).send({
    status: "OK",
    data: createNewWorkout,
  });
};

const updateOneWorkout = (request, response) => {
  const workoutId = request.params.workoutId;
  const updatedWorkoutData = request.body;
  const updatedWorkout = workoutService.updateOneWorkout(workoutId, updatedWorkoutData);
  response.send(updatedWorkout);
};

const deleteOneWorkout = (request, response) => {
  const deletedWorkout = workoutService.deleteOneWorkout(
    request.params.workoutId
  );
  console.log(deletedWorkout)
  response.send({
    deletedWorkout,
  });
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
