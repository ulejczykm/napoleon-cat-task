import { Counter } from "components/Counter";
import { PhotosView } from "components/PhotosView";
import "./style.css";

export const Layout = () => {
  return (
    <div className="layout">
      <PhotosView />
      <Counter numberOfClicks={12} />
    </div>
  );
};
