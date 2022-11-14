import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './features/cake/cakeSlice';

function App() {
  const numberOfCakes = useSelector(state => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Redux-Toolkit</h1>
      <h2>Number of Cakes: {numberOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order_Cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock_Cake</button>
    </div>
  );
}

export default App;
