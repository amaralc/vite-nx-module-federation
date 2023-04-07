import useCount from "../store";

import "./button.css";

export const Button = () => {
  const [state, setState] = useCount();
  return (
    <div>
      <button className="shared-btn" onClick={() => setState((s) => s + 1)}>
        (remote) Counter: {state}
      </button>
    </div>
  );
};

export default Button;
