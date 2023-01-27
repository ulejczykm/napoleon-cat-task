import { Counter } from "components/Counter";
import { PhotosView } from "components/PhotosView";
import { useState } from "react";
import "./style.css";

export const Layout = () => {
  const [numberOfAllClicks, setNumberOfAllClicks] = useState<number>(0);

  return (
    <div className="layout">
      <Counter numberOfAllClicks={numberOfAllClicks} />
    </div>
  );
};
