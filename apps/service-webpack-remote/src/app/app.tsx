// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Button } from '../components/button';
import { useClick } from '../store';

export function App() {
  const [count, setCount] = useClick();

  return (
    <>
      <h1>Webpack Remote</h1>
      <Button />
      <div>
        <button onClick={() => setCount((count) => count + 1)}>Count: {count}</button>
      </div>
      <div />
    </>
  );
}

export default App;
