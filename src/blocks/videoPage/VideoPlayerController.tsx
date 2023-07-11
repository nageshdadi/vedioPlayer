import {Dimensions} from 'react-native';
import {Component} from 'react';
const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};
interface IProps {
  route?: any;
}
interface IState {
  orientation: string;
}
export class VideoPlayerController extends Component<IProps, IState> {
  state = {
    orientation: isPortrait() ? 'portrait' : 'landscape',
  };
  componentDidMount(): void {
    this.getScreen();
  }

  getScreen = () => {
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: isPortrait() ? 'portrait' : 'landscape',
      });
    });
  };
}

export default VideoPlayerController;
