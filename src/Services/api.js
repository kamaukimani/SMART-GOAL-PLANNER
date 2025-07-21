import axios from 'axios';

const API_URL = 'http://localhost:3000/goals';

export const getGoals = () => axios.get(API_URL);
export const createGoal = (goal) => axios.post(API_URL, goal);
export const updateGoal = (id, updates) => axios.patch(`${API_URL}/${id}`, updates);
export const deleteGoal = (id) => axios.delete(`${API_URL}/${id}`);
