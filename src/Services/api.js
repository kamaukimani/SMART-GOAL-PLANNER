import axios from 'axios';

const API_URL = 'http://localhost:3000/goals';

 const getGoals = () => axios.get(API_URL);
 const createGoal = (goal) => axios.post(API_URL, goal);
 const updateGoal = (id, updates) => axios.patch(`${API_URL}/${id}`, updates);
 const deleteGoal = (id) => axios.delete(`${API_URL}/${id}`);


export {getGoals, createGoal, updateGoal, deleteGoal}