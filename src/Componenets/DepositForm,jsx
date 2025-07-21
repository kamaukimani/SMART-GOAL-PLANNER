import { updateGoal } from '../services/api';
import { useState } from 'react';

const DepositForm = ({ goals, onDeposit }) => {
  const [amount, setAmount] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const goal = goals.find((g) => g.id === selectedGoal);
    const newSaved = goal.savedAmount + parseFloat(amount);
    await updateGoal(goal.id, { savedAmount: newSaved });
    onDeposit();
    setAmount('');
    setSelectedGoal('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make a Deposit</h2>
      <select value={selectedGoal} onChange={(e) => setSelectedGoal(e.target.value)} required>
        <option value="">Select Goal</option>
        {goals.map((g) => (
          <option key={g.id} value={g.id}>
            {g.name}
          </option>
        ))}
      </select>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
      <button type="submit">Deposit</button>
    </form>
  );
};

export default DepositForm;
