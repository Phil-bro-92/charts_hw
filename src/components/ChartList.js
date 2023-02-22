import Song from "./Song";

const ChartList = ({ entries }) => {
  const songsNodes = entries.map((entry, index) => {
    return <Song key={index} song={entry['im:name'].label} artist={entry['im:artist'].label} sample={entry.link[1].attributes.href} />;
  });
  return <ol>{songsNodes}</ol>;
};

export default ChartList;
