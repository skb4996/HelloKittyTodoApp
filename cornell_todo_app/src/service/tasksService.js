import axios from "axios";

async function getTasks() {
    const response = await axios.get('https://8a270e0b4a.execute-api.us-east-1.amazonaws.com/v1/tasks');
    const tasks = response.data;

    return tasks;
};

async function createTask(task) {
    const response = await axios.post('https://8a270e0b4a.execute-api.us-east-1.amazonaws.com/v1/tasks', task);
    const newTask = response.data;

    return newTask;
}

async function deleteTask(task) {
    const response = await axios.delete(`https://8a270e0b4a.execute-api.us-east-1.amazonaws.com/v1/tasks/${task.task_id}`);
    return response.data;
}

async function markTaskCompleted(task) {
    const updatedTask = {...task, completed: true};
    const response = await axios.put(`https://8a270e0b4a.execute-api.us-east-1.amazonaws.com/v1/tasks/${task.task_id}`, updatedTask);
    return response.data;
}

async function updateTask(task) {
    console.log('task', task);
    let updatedTask;
    if(task){
      updatedTask = {...task};
      console.log('task', updatedTask);
      const response = await axios.put(`https://8a270e0b4a.execute-api.us-east-1.amazonaws.com/v1/tasks/${task.task_id}`, updatedTask);
      return response.data;
    }
    return null;
  }  


export {getTasks, createTask, deleteTask, markTaskCompleted, updateTask}