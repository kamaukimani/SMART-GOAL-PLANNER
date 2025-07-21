const progress = Math.min((savedAmount / targetAmount) * 100, 100);
const remaining = targetAmount - savedAmount;

return (
  <div>
    <h3>{name}</h3>
    <p>Category: {category}</p>
    <p>Saved: ${savedAmount} / ${targetAmount}</p>
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${progress}%` }}></div>
    </div>
    <p>Remaining: ${remaining}</p>
  </div>
);
