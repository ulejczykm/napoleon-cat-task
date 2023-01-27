import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import "./style.css";

interface Props {
  url: string;
  borderColor: string;
}

interface Props {
  setNumberOfAllClicks: Dispatch<SetStateAction<number>>;
  setReset: Dispatch<SetStateAction<boolean>>;
  reset: boolean;
}

const limitOfClicks = 5;

export const Photo = ({
  url,
  borderColor,
  setNumberOfAllClicks,
  reset,
  setReset,
}: Props) => {
  const [numberOfClicks, setNumberOfClicks] = useState<number>(0);
  const [randomPhotoId, setRandomPhotoId] = useState<number | null>(null);

  const onPhotoClick = useCallback(async () => {
    setNumberOfClicks((prev) => prev + 1);
    setNumberOfAllClicks((prev) => prev + 1);
    setRandomPhotoId(Math.floor(Math.random() * 1000));
  }, []);

  useEffect(() => {
    if (reset) {
      setNumberOfClicks(0);
      setReset(false);
    }
  }, [reset]);

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
