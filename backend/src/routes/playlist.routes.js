import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { addProblemToPlaylist, createPlaylist, deletePlaylist, getAllPlaylistDetails, getPlaylistDetails, removeProblemFromPlaylist } from "../controllers/playlist.controller.js";

const playlistRoutes = express.Router();

playlistRoutes.get("/", authMiddleware, getAllPlaylistDetails);
playlistRoutes.get("/:playlistId", authMiddleware, getPlaylistDetails);
playlistRoutes.post("/create-playlist", authMiddleware, createPlaylist);
playlistRoutes.post(
  "/:playlistId/add-problem",
  authMiddleware,
  addProblemToPlaylist
);
playlistRoutes.delete("/:playlistId", authMiddleware, deletePlaylist);
playlistRoutes.delete(
  "/:playlistId/remove-problem",
  authMiddleware,
  removeProblemFromPlaylist
);

export default playlistRoutes;
