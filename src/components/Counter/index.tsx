import "./style.css";

interface Props {
  numberOfClicks: number;
}

export const Counter = ({ numberOfClicks }: Props) => (
  <div className="counter">
    <span className="number">{numberOfClicks}</span>
  </div>
);
