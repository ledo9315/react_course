import Costs from "./components/Costs.js";

const costs = [
  {
    date: new Date(2021, 2, 12),
    description: "Fernseher",
    amount: 999.99,
  },
  {
    date: new Date(2023, 8, 14),
    description: "Auto",
    amount: 9129.99,
  },
  {
    date: new Date(2016, 6, 6),
    description: "Handy",
    amount: 432.99,
  },
];

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
