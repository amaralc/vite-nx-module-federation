import { useClick } from '../store';

import './button.css';

export const Button = () => {
  const [state, setState] = useClick();
  return (
    <div>
      <button className="webpack-btn" onClick={() => setState((s) => s + 1)}>
        (remote) Counter: {state}
      </button>
    </div>
  );
};
