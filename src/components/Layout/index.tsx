import { Counter } from "components/Counter";
import { PhotosView } from "components/PhotosView";
import { ResetButton } from "components/ResetButton";
import { useEffect, useState } from "react";
import "./style.css";

export const Layout = () => {
  const [numberOfAllClicks, setNumberOfAllClicks] = useState<number>(0);
  const [reset, setReset] = useState<boolean>(false);

  useEffect(() => {
    if (reset) {
      setNumberOfAllClicks(0);
      setReset(false);
    }
  }, [reset]);

  return (
    <div className="layout">
      <ResetButton setReset={setReset} />
      <PhotosView
        setReset={setReset}
        reset={reset}
        setNumberOfAllClicks={setNumberOfAllClicks}
      />
      <Counter numberOfAllClicks={numberOfAllClicks} />
    </div>
  );
};
