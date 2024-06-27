import React, { useState } from 'react';

const AddSongForm = ({ addSong }) => {
  const [song, setSong] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(song);
    setSong('');
  };

  return (
    <form style={{display: 'flex', justifyContent: "center", alignItems: 'center'}} onSubmit={handleSubmit}>
      <div style={{display: 'flex', justifyContent: "center", alignItems: 'center', width: '20vw'}}>
        <input
          className="input-group"
          type="text"
          value={song}
          onChange={(e) => setSong(e.target.value)}
          placeholder="Add a new song"
        />
      </div>

      <button className='btn btn-success m-2' type="submit">Add</button>
    </form>
  );
};

export default AddSongForm;
