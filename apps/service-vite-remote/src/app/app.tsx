// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Button from '../components/button';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <h1>Remote Application</h1>
      <Button />
      <NxWelcome title="service-vite-remote" />
      <div />
    </>
  );
}

export default App;
