import { Dispatch, SetStateAction, useState } from "react";
import "./style.css";

interface Props {
  setReset: Dispatch<SetStateAction<boolean>>;
}

export const ResetButton = ({ setReset }: Props) => {
  const [buttonPress, setButtonPress] = useState<boolean>(false);

  return (
    <div className="buttonWrapper">
      <button
        style={{ backgroundColor: buttonPress ? "#3A9F9F" : "#30CCCC" }}
        onMouseDown={() => setButtonPress(true)}
        onMouseUp={() => setButtonPress(false)}
        onMouseLeave={() => setButtonPress(false)}
        onClick={() => setReset(true)}
        className="button"
      >
        Reset
      </button>
    </div>
  );
};
