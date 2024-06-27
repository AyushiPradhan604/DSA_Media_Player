// src/App.js
import React, { useState } from 'react';
import LinkedList from './LinkedList';
import Playlist from './components/Playlist';
import AddSongForm from './components/AddSongForm';
import Controls from './components/Controls';
import './App.css';

const App = () => {
  const [playlist, setPlaylist] = useState(new LinkedList());
  const [currentSong, setCurrentSong] = useState(null);

  const addSong = (song) => {
    playlist.add(song);
    setPlaylist(Object.assign(new LinkedList(), playlist));
  };

  const playSong = () => {
    if (!currentSong) {
      setCurrentSong(playlist.head);
    } else if (currentSong.next) {
      setCurrentSong(currentSong.next);
    } else {
      setCurrentSong(playlist.head);
    }
  };

  const deleteSong = () => {
    if (currentSong) {
      playlist.delete(currentSong.value);
      setPlaylist(Object.assign(new LinkedList(), playlist));
      setCurrentSong(null);
    } else {
      alert('No song is currently playing');
    }
  };

  const shufflePlaylist = () => {
    playlist.shuffle();
    setPlaylist(Object.assign(new LinkedList(), playlist));
    setCurrentSong(null);
  };

  return (
    <div className="App">
      <h1>Playlist Manager</h1>
      <AddSongForm addSong={addSong} />
      <Controls
        playSong={playSong}
        deleteSong={deleteSong}
        shufflePlaylist={shufflePlaylist}
      />
      <Playlist songs={playlist.toArray()} currentSong={currentSong} />
      {currentSong && <div>Now Playing: {currentSong.value}</div>}
    </div>
  );
};

export default App;
