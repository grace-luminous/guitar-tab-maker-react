import React from 'react';
import Marker from '../Marker';
import Button from '../Button';
import './index.scss';

const FretToolbar = ({
	onClickMarker = (isBasic: boolean) => {},
	onToggleNotes = () => {},
	onToggleFrets = () => {},
	onClickScreenShot = () => {},
	activeMarker = 1
}) => {

	return (
		<div className="fret-tool-bar">
			<div className="markers">
				<Marker onClick={onClickMarker} isActive={activeMarker === 1} isBasic />
				<Marker
					onClick={onClickMarker}
					isActive={activeMarker === 2}
					isBasic={false}
				/>
			</div>
			<Button name="Toggle Note's" onClick={onToggleNotes}/>
			<Button name="Toggle Fret Number's" onClick={onToggleFrets}/>
			<Button name="Take Screen Shot" onClick={onClickScreenShot}/>
		</div>
	);
};

export default FretToolbar;
