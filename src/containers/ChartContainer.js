import { useState, useEffect } from "react";
import ChartList from "../components/ChartList";

const ChartContainer = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchCharts();
  }, []);

  const fetchCharts = () => {
    const request = fetch(
      "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    )
      .then((response) => response.json())
      .then((songs) => setSongs(songs.feed.entry));
  };
  return <div><ChartList entries={songs} /></div>;
};

export default ChartContainer;
