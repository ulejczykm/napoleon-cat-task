import { Photo } from "components/Photo";
import { useEffect, useState, useCallback } from "react";
import "./style.css";

const limit = 12;

interface Url {
  url: string;
}

interface Photo extends Url {
  author: string;
  download_url: string;
  height: number;
  width: number;
  id: string;
}

export const PhotosView = () => {
  const [data, setData] = useState<Url[] | []>([]);
  const [colors, setColors] = useState<string[]>([]);

  const getColor = useCallback(() => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setColors((prev) => [...prev, color]);
  }, []);

  useEffect(() => {
    (() => {
      for (let i = 0; i < limit; i++) {
        getColor();
      }
    })();
  }, []);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          `https://picsum.photos/v2/list?limit=${limit}`
        ).then((res) => {
          if (!res.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${res.status}`
            );
          } else return res.json();
        });

        setData(
          response.map((res: Photo) => ({
            url: res.download_url,
          }))
        );
      } catch (error) {
        console.error({ error: error });
      }
    };

    fetchPhotos();
  }, []);

  return (
    <ul className="photosContainer">
      {data?.map(({ url }, i) => (
        <Photo borderColor={colors[i]} key={url} url={url} />
      ))}
    </ul>
  );
};