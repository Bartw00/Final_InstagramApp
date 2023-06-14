import { useEffect, useState } from "react";
import axios from "axios";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Box from "@mui/material/Box";
import InstagramPost from "./InstagramPost";
import apiCall from "../../../../shared/services/apiCall";

const InstagramFeed = () => {
  const [feedData, setFeedData] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiCall.get("/curated", {
          headers: {
            Authorization: import.meta.env.VITE_PEXEL_API_KEY,
          },
        });
        setFeedData(response.data.photos);
      } catch (error) {
        console.error("Error fetching Instagram feed:", error);
      }
    };

    fetchData();
  }, []);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const renderSelectedPhoto = () => {
    if (selectedPhoto) {
      return (
        <InstagramPost
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      );
    }
    return null;
  };

  return (
    <Box sx={{ width: "100%", minHeight: "100px" }}>
      <ImageList
        variant="masonry"
        cols={3}
        gap={8}
        sx={{ width: "100%", minHeight: "600px" }}
      >
        {feedData.map((item) => (
          <ImageListItem key={item.id} onClick={() => handlePhotoClick(item)}>
            <img
              src={`${item.src.large}`}
              alt={item.title}
              loading="lazy"
              style={{ cursor: "pointer", maxHeight: "450px" }}
            />
            <ImageListItemBar title={item.title} subtitle={item.photographer} />
          </ImageListItem>
        ))}
      </ImageList>

      {renderSelectedPhoto()}
    </Box>
  );
};

export default InstagramFeed;
