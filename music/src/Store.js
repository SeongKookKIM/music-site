import { configureStore, createSlice } from "@reduxjs/toolkit";

let backgroundVideo = createSlice({
  name: "backgroundVideo",
  initialState: [
    "assets/image/video/day.mp4",
    "assets/image/video/sunset.mp4",
    "assets/image/video/night.mp4",
  ],
});

let backgroundRainVideo = createSlice({
  name: "backgroundRainVideo",
  initialState: ["assets/image/video/비.mp4", "assets/image/video/비2.mp4"],
});

let backgroundTravelVideo = createSlice({
  name: "backgroundTravelVideo",
  initialState: [
    "assets/image/video/travel-day.mp4",
    "assets/image/video/travel-night.mp4",
  ],
});

let backgroundDriveVideo = createSlice({
  name: "backgroundDriveVideo",
  initialState: ["assets/image/video/drive.mp4"],
});

let backgroundSadVideo = createSlice({
  name: "backgroundSadVideo",
  initialState: [
    "assets/image/video/슬픈음악.mp4",
    "assets/image/video/슬픈음악2.mp4",
  ],
});

let backgroundStudyVideo = createSlice({
  name: "backgroundStudyVideo",
  initialState: ["assets/image/video/집중.mp4", "assets/image/video/집중2.mp4"],
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

let musicAudio = createSlice({
  name: "musicAudio",
  initialState: { src: "" },
  reducers: {
    handlerAudio(state, action) {
      state.src = action.payload.src;
    },
  },
});
export let { handlerAudio } = musicAudio.actions;

export default configureStore({
  reducer: {
    backgroundVideo: backgroundVideo.reducer,
    backgroundRainVideo: backgroundRainVideo.reducer,
    backgroundTravelVideo: backgroundTravelVideo.reducer,
    backgroundDriveVideo: backgroundDriveVideo.reducer,
    backgroundSadVideo: backgroundSadVideo.reducer,
    backgroundStudyVideo: backgroundStudyVideo.reducer,
    musicSelected: musicSelected.reducer,
    musicAudio: musicAudio.reducer,
  },
});
