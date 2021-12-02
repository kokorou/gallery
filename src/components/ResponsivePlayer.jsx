import React from 'react';
import ReactPlayer from 'react-player';
import '../CSS/responsive-player.css';

const ResponsivePlayer =() => {
  return (
      <div className='player-wrapper'>
        <ReactPlayer
          className="react-player"
          url='https://youtu.be/p-lGJpCykxA'
          controls = {true}
        />
      </div>
  )
}

export default ResponsivePlayer
  