import { configureStore, createSlice } from "@reduxjs/toolkit";

let backgroundVideo = createSlice({
  name: "backgroundVideo",
  initialState: [
    "assets/video/day.mp4",
    "assets/video/sunset.mp4",
    "assets/video/night.mp4",
  ],
});

let backgroundRainVideo = createSlice({
  name: "backgroundRainVideo",
  initialState: ["assets/video/비.mp4", "assets/video/비2.mp4"],
});

let backgroundTravelVideo = createSlice({
  name: "backgroundTravelVideo",
  initialState: [
    "assets/video/travel-day.mp4",
    "assets/video/travel-night.mp4",
  ],
});

let backgroundDriveVideo = createSlice({
  name: "backgroundDriveVideo",
  initialState: ["assets/video/drive.mp4"],
});

let backgroundSadVideo = createSlice({
  name: "backgroundSadVideo",
  initialState: ["assets/video/슬픈음악.mp4", "assets/video/슬픈음악2.mp4"],
});

let backgroundStudyVideo = createSlice({
  name: "backgroundStudyVideo",
  initialState: ["assets/video/집중.mp4", "assets/video/집중2.mp4"],
});

let musicSelected = createSlice({
  name: "musicSelected",
  initialState: { name: "" },
  reducers: {
    handlerSelected(state, action) {
      state.name = action.payload.name;
    },
  },
});

export let { handlerSelected } = musicSelected.actions;

export default configureStore({
  reducer: {
    backgroundVideo: backgroundVideo.reducer,
    backgroundRainVideo: backgroundRainVideo.reducer,
    backgroundTravelVideo: backgroundTravelVideo.reducer,
    backgroundDriveVideo: backgroundDriveVideo.reducer,
    backgroundSadVideo: backgroundSadVideo.reducer,
    backgroundStudyVideo: backgroundStudyVideo.reducer,
    musicSelected: musicSelected.reducer,
  },
});
