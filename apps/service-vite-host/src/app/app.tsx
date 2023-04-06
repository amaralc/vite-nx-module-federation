// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Button from '../components/button';
import NxWelcome from './nx-welcome';

import RemoteButton from 'service-vite-remote/Button';

export function App() {
  return (
    <>
      <h1>Host Application</h1>
      <Button />
      <RemoteButton />
      <NxWelcome title="service-vite-host" />
      <div />
    </>
  );
}

export default App;
