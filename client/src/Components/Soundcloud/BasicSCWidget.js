// more info at https://github.com/kosmetism/react-soundplayer

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withSoundCloudAudio } from 'react-soundplayer/addons';
import { PlayButton, Progress, VolumeControl, NextButton, Cover, Icons } from 'react-soundplayer/components';

// const { SoundCloudLogoSVG } = Icons;

class ProgressSoundPlayer extends Component {

  state = {
    Progress: ''
  }

  componentDidMount(){
    console.log(this.props);
    const arr = []
    const pro = this.props.soundCloudAudio  
    arr.push(pro)
    console.log(arr[0].duration);
    this.setState({Progress:this.props.soundCloudAudio})
    // const { track, currentTime, duration } = this.props;
    // console.log(track.artwork_url);  
  }

  render() {
    // let arr = []
    // arr.push(this.props)
    // console.log(arr);
    // console.log(track);
    console.log(this.state.Progress.audio);
    return (
      <div className="p2 border navy mt1 mb3 flex flex-center rounded">
        <PlayButton className="flex-none h4 mr2 button white btn-big button-outline button-grow bg-orange circle" {...this.props} />
        <div className="flex-auto">
          <h2 className="h4 nowrap m0">{this.props.track ? this.props.track.user.username : ''}</h2>
          <h2 className="h4 nowrap caps m0">{this.props.track ? this.props.track.title : ''}</h2>
          <div className='flex flex-center'>
            <VolumeControl
              className='mr2 flex flex-center'
              buttonClassName="flex-none h6 button white btn-small button-outline button-grow bg-orange circle btn-square"
              {...this.props} />
            <NextButton
              />
            <Cover
              className={String}
              trackName={String}
              artistName={String}
              backgroundUrl={this.props.track} />
            <Progress
              className="mt1 mb1 rounded"
              innerClassName="rounded-left"
              value={(this.props.currentTime / this.props.duration) * 100 || 0}
              {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

// ProgressSoundPlayer.propTypes = {
//   resolveUrl: this.props.resolveUrl,
//   clientId: this.props.clientId
// };

export default withSoundCloudAudio(ProgressSoundPlayer);