import React from 'react';

class Music extends React.Component
{
    componentDidMount()
    {
        this.props.currentlyOnPlayMusicScreen();
        this.props.playPauseButtonClicked();
    }
    componentWillUnmount()
    {
        this.props.currentlyOnPlayMusicScreen()
    }
    render()
    {
        const {songIndex, Songs}=this.props;
        return (
            <div className="screen-music">
                <h2>{Songs[songIndex].name}</h2>
                <div className="song-image">
                    <img src={'https://freepikpsd.com/wp-content/uploads/2019/10/songs-png-6-Transparent-Images.png'} alt="song item"></img>
                </div>
                <div style={{marginTop:20}}>
                    <audio controls="seeking" id="audio" src={Songs[songIndex].url}></audio>
                </div>
                <div className='screen-music-instruction'>
                    <p>
                        Use " <i className="fas fa-play"></i> / <i className="fas fa-pause"></i> " button to Play / Pause.
                    </p>
                </div>
            </div>
        );
    }
};

export default Music;