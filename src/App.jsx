import { useEffect, useState } from 'react';
import { getGoals } from './services/api';
import AddGoalForm from './components/AddGoalForm';
import GoalCard from './components/GoalCard';
import DepositForm from './components/DepositForm';
import Overview from './components/GoalOverview';

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
      <h1>SMART GOAL PLANNER </h1>
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
