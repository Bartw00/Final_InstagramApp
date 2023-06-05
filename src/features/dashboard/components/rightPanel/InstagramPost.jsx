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
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const DialogContainer = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    backgroundColor: "#1A1A24",
    color: "white",
  },
  // padding: "80px",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const IconGroup = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  marginTop: theme.spacing(2),
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
          <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
          {photo && photo.alt ? photo.alt : "Lorem ipsum dolor..."}
        </Typography>

        <IconGroup>
          <div>
            <IconButton
              aria-label="add to favorites"
              style={{ color: "white" }}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton>
              <ModeCommentIcon aria-label="comment" style={{ color: "white" }} />
            </IconButton>
            <IconButton aria-label="share" style={{ color: "white" }}>
              <ShareIcon />
            </IconButton>
          </div>
          <IconButton
            aria-label="expand more"
            style={{ color: "white", marginLeft: "auto" }}
          >
            <BookmarkBorderIcon />
          </IconButton>
        </IconGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </DialogContainer>
  );
};

export default InstagramPost;
