import React from "react";

const Song = ({ song, artist, sample }) => {
  return (
    <li>
      {song} by {artist}
      <audio controls>
        <source src={sample} ></source>
      </audio>
    </li>
  );
};

export default Song;
