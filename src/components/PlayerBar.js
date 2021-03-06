import React, { Component } from 'react';
import { formatTime } from '../utilities';

class PlayerBar extends Component {
	render() {
		return (
			<section className="player-bar"> 
				<section id="buttons">
					<button id="icon previous" onClick={this.props.handlePrevClick}> 
						<span className="ion-md-skip-backward"></span>
					</button>
				<button id="icon play-pause" onClick={this.props.handleSongClick} >
					<span className={this.props.isPlaying ? 'icon ion-md-pause' : 'icon ion-md-play'}></span>
				</button>
				<button id="next" onClick={this.props.handleNextClick}>
					<span className="icon ion-md-skip-forward"></span>
				</button>
				</section>
				<section id="time-control">
					<div className="current-time">Current Time {formatTime(this.props.currentTime)}</div>
					<input 
						type="range" 
						className="seek-bar"
						value={(this.props.currentTime / this.props.duration) || 0}
						max="1"
						min="0"
						step="0.01"
						onChange={this.props.handleTimeChange}
					/>
					<div className="total-time">Duration {formatTime(this.props.duration)}</div>
				</section>
				<section id="volume-control"> 
					<div className="current-time">Volume {this.props.currentVolume}</div>
					<input 
						type="range" 
						className="seek-bar" 
						value={(this.props.currentVolume)}
						max="1"
						min="0"
						step=".01"
						onChange={this.props.handleVolumeChange} 
					/>
				</section>
			</section> 
		);
	}
}

export default PlayerBar; 