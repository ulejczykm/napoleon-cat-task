import "./style.css";

interface Props {
  numberOfAllClicks: number;
}

export const Counter = ({ numberOfAllClicks }: Props) => (
  <div className="counter">
    <span className="number">{numberOfAllClicks}</span>
  </div>
);
