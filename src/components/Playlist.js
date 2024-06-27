import React from 'react';

const Playlist = ({ songs, currentSong }) => {
    return (
        <div>
            <h2>Playlist</h2>
            <ul>
                {songs.map((song, index) => (
                    <li key={index}>{song === currentSong?.value? <b style={{fontSize:'30px'}}>{song}</b> : song}</li>

                ))}
            </ul>
        </div>
    );
};

export default Playlist;
