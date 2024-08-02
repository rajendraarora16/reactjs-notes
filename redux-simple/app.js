import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './action';

const App = () => {

  const count = useSelector((state) => state?.count);
  const dispatch = useDispatch();

  return <>
    <h1>Counter: {count}</h1>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decremnet</button>
  </>
}

export default App;
