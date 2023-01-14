import axios from "axios";
import { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";

const Photos: React.FC = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((result: any) => {
      setPhotos(result);
    });
  }, []);

  return (
    <div>
      {photos.map((photo: any) => (
        <LazyLoad
          key={photo.id}
          height={600}
        >
          <img
            data-testid="photo"
            alt={photo.title}
            src={photo.url}
          />
        </LazyLoad>
      ))}
    </div>
  );
};

export default Photos;
