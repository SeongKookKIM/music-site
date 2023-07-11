import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handlerSelected } from "../Store";

function MusicList() {
  let musicSelected = useSelector((state) => state.musicSelected);
  let dispatch = useDispatch();

  console.log(musicSelected);
  return (
    <div className="music-list">
      <ul>
        <li>
          <p
            onClick={() => {
              dispatch(
                handlerSelected({
                  name: "default",
                })
              );
            }}
          >
            기본
          </p>
        </li>
        <li>
          <p
            onClick={() => {
              dispatch(
                handlerSelected({
                  name: "drive",
                })
              );
            }}
          >
            드라이브
          </p>
        </li>
        <li>
          <p
            onClick={() => {
              dispatch(
                handlerSelected({
                  name: "sad",
                })
              );
            }}
          >
            슬픈음악
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <p
            onClick={() => {
              dispatch(
                handlerSelected({
                  name: "travel",
                })
              );
            }}
          >
            여행
          </p>
        </li>
        <li>
          <p
            onClick={() => {
              dispatch(
                handlerSelected({
                  name: "rain",
                })
              );
            }}
          >
            비올때
          </p>
        </li>
        <li>
          <p
            onClick={() => {
              dispatch(
                handlerSelected({
                  name: "study",
                })
              );
            }}
          >
            집중
          </p>
        </li>
      </ul>
    </div>
  );
}

export default MusicList;
