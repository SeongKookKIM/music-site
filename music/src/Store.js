import { configureStore, createSlice } from "@reduxjs/toolkit";

let backgroundVideo = createSlice({
  name: "backgroundVideo",
  initialState: [
    "assets/video/day.mp4",
    "assets/video/sunset.mp4",
    "assets/video/night.mp4",
  ],
});

export default configureStore({
  reducer: {
    backgroundVideo: backgroundVideo.reducer,
  },
});
