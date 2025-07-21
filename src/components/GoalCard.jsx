import { deleteGoal } from "../services/api"

const GoalCard = ({ goal, onChange }) => {
  const { id, name, targetAmount, savedAmount, category, deadline } = goal;
  const progress = Math.min((savedAmount / targetAmount) * 100, 100);
  const remaining = targetAmount - savedAmount;
  const deadlineDate = new Date(deadline);
  const daysLeft = Math.ceil((deadlineDate - new Date()) / (1000 * 60 * 60 * 24));

  const status =
    savedAmount >= targetAmount ? '✅ Completed'
    : daysLeft < 0 ? '❌ Overdue'
    : daysLeft <= 30 ? '⚠️ Deadline Soon'
    : '';

  const handleDelete = async () => {
    if (confirm(`Delete goal "${name}"?`)) {
      await deleteGoal(id);
      onChange();
    }
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', marginTop: '1rem' }}>
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Target: ${targetAmount}, Saved: ${savedAmount}</p>
      <div style={{ background: '#eee', width: '100%', height: '10px', borderRadius: '5px' }}>
        <div style={{ width: `${progress}%`, background: 'green', height: '100%', borderRadius: '5px' }}></div>
      </div>
      <p>Remaining: ${remaining} | Days Left: {daysLeft} {status}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default GoalCard;
