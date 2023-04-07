import { useCount } from "service-vite-remote/store";

import "./button.css";

export const Button = () => {
  const [state, setState] = useCount();
  return (
    <div>
      <button className="host-btn" onClick={() => setState((s) => s + 1)}>
        (host) Counter: {state}
      </button>
    </div>
  );
};

export default Button;
