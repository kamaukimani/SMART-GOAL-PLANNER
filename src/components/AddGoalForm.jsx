import { useState } from 'react';
import { createGoal } from '../services/api';

const AddGoalForm = ({ onGoalAdded }) => {
  const [form, setForm] = useState({
    name: '',
    targetAmount: '',
    category: '',
    deadline: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newGoal = {
      ...form,
      targetAmount: parseFloat(form.targetAmount),
      savedAmount: 0,
      createdAt: new Date().toISOString().split('T')[0],
    };
    await createGoal(newGoal);
    onGoalAdded();
    setForm({ name: '', targetAmount: '', category: '', deadline: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Goal</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="targetAmount" placeholder="Target Amount" value={form.targetAmount} onChange={handleChange} required />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} required />
      <input name="deadline" type="date" value={form.deadline} onChange={handleChange} required />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default AddGoalForm;
