import React from 'react';

const Controls = ({ playSong, deleteSong, shufflePlaylist }) => {
    return (
        <div>
            <button className='btn btn-primary m-2' onClick={playSong}>Play/Next</button>
            <button className='btn btn-primary m-2' onClick={deleteSong}>Delete</button>
            <button className='btn btn-primary m-2' onClick={shufflePlaylist}>Shuffle</button>
        </div>
    );
};

export default Controls;
