import { useCallback, useState } from "react";
import "./style.css";

interface Props {
  url: string;
  borderColor: string;
}

const limitOfClicks = 5;

export const Photo = ({ url, borderColor }: Props) => {
  const [numberOfClicks, setNumberOfClicks] = useState<number>(0);
  const [randomPhotoId, setRandomPhotoId] = useState<number | null>(null);

  const onPhotoClick = useCallback(async () => {
    setNumberOfClicks((prev) => prev + 1);
    setRandomPhotoId(Math.floor(Math.random() * 1000));
  }, []);

  console.log(randomPhotoId);

  return (
    <img
      onClick={numberOfClicks < limitOfClicks ? onPhotoClick : () => null}
      className="photoView"
      style={{
        borderColor: borderColor,
        cursor: numberOfClicks < limitOfClicks ? "pointer" : "not-allowed",
      }}
      src={
        !randomPhotoId
          ? url
          : `https://picsum.photos/id/${randomPhotoId}/500/333`
      }
    />
  );
};
