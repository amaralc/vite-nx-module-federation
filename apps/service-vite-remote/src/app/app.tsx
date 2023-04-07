// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Button from '../components/button';
import useCount from '../store';

export function App() {
  const [count, setCount] = useCount();

  return (
    <>
      <h1>Remote Application</h1>
      <Button />
      <div>
        <button onClick={() => setCount((count) => count + 1)}>Count: {count}</button>
      </div>
      <div />
    </>
  );
}

export default App;
