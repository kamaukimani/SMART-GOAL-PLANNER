import { useEffect, useState } from 'react';
import { getGoals } from './Services/api';
import AddGoalForm from './Componenets/AddGoalForm';
import GoalCard from './Componenets/GoalCard';
import DepositForm from './components/DepositForm';
import Overview from './Componenets/GoalOverview';

function App() {
  const [goals, setGoals] = useState([]);

  const fetchGoals = async () => {
    const res = await getGoals();
    setGoals(res.data);
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🎯 Smart Goal Planner</h1>
      <Overview goals={goals} />
      <AddGoalForm onGoalAdded={fetchGoals} />
      <DepositForm goals={goals} onDeposit={fetchGoals} />
      <hr />
      {goals.map((goal) => (
        <GoalCard key={goal.id} goal={goal} onChange={fetchGoals} />
      ))}
    </div>
  );
}

export default App;
