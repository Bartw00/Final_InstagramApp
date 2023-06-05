import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DialogContainer = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    backgroundColor: "#1A1A24",
    color: "white",
  },
  // padding: "80px",
}));

const InstagramPost = ({ photo, onClose }) => {
  return (
    <DialogContainer open={!!photo} onClose={onClose}>
      <DialogTitle>Instagram Post</DialogTitle>
      <DialogContent>
        {photo && (
          <img
            src={photo.src.large}
            alt={photo.title}
            style={{ width: "100%", display: "flex" }}
          />
        )}
        <Typography variant="body2" sx={{ marginTop: "16px" }}>
          Description: {photo.alt}
        </Typography>

        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMoreIcon />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </DialogContainer>
  );
};

export default InstagramPost;
