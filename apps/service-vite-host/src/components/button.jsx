import { useState } from "react";

import "./button.css";

export const Button = () => {
  const [state, setState] = useState(0);
  return (
    <div>
      <button className="host-btn" onClick={() => setState((s) => s + 1)}>
        (host) Counter: {state}
      </button>
    </div>
  );
};

export default Button;
