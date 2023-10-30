
// filter method
const music = [
  { song: "Baby I", artist:" Ariana"},
  { song: "Gambler", artist:"Kenny"},
  {song: "Shower", artist: "Becky"}
  ];

const filteredSongs = music.filter(item => item.song.includes("shower"));

console.log(filteredsongs);  // [ { song: 'Shower', artist: 'Becky' } ]
