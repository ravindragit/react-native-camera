import React, {
  Component,
} from 'react-native';

const CAMERA_REF = 'camera';

function convertStringProps(props) {
  const newProps = { ...props };
  if (typeof props.aspect === 'string') {
    newProps.aspect = Camera.constants.Aspect[props.aspect];
  }

  if (typeof props.flashMode === 'string') {
    newProps.flashMode = Camera.constants.FlashMode[props.flashMode];
  }

  if (typeof props.orientation === 'string') {
    newProps.orientation = Camera.constants.Orientation[props.orientation];
  }

  if (typeof props.torchMode === 'string') {
    newProps.torchMode = Camera.constants.TorchMode[props.torchMode];
  }

  if (typeof props.type === 'string') {
    newProps.type = Camera.constants.Type[props.type];
  }

  if (typeof props.captureQuality === 'string') {
    newProps.captureQuality = Camera.constants.CaptureQuality[props.captureQuality];
  }

  return newProps;
}

export default class Camera extends Component {

  static constants = {
    Aspect: 0,
    BarCodeType: 0,
    Type: 0,
    CaptureMode: 0,
    CaptureTarget: 0,
    CaptureQuality: 0,
    Orientation: 0,
    FlashMode: 0,
    TorchMode: 0,
  };

  static propTypes = {
  ...View.propTypes,
  aspect: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  captureAudio: PropTypes.bool,
  captureMode: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  captureQuality: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  captureTarget: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  defaultOnFocusComponent: PropTypes.bool,
  flashMode: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  keepAwake: PropTypes.bool,
  onBarCodeRead: PropTypes.func,
  onFocusChanged: PropTypes.func,
  onZoomChanged: PropTypes.func,
  mirrorImage: PropTypes.bool,
  orientation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  playSoundOnCapture: PropTypes.bool,
  torchMode: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
  };

  static defaultProps = {
    aspect: 0,
    type: 0,
    orientation: 0,
    captureAudio: true,
    captureMode: 0,
    captureTarget: 0,
    captureQuality: 0,
    defaultOnFocusComponent: true,
    flashMode: 0,
    playSoundOnCapture: true,
    torchMode: 0,
    mirrorImage: false,
  };

  constructor() {
    super();

    this.state = {
      isAuthorized: false,
      isRecording: false,
    };
  }

  componentWillMount() {
    console.log('Warning: react-native-camera is disabled in the Siphon Sandbox');
  }

  render() {
    return;
  }

  capture(options) {
    console.log('Warning: capture() is disabled in the Siphon Sandbox');
  }

  stopCapture() {
    console.log('Warning: stopCapture() is disabled in the Siphon Sandbox');
  }

  getFOV() {
    console.log('Warning: getFOV() is disabled in the Siphon Sandbox');
  }

  hasFlash() {
    console.log('Warning: hasFlash() is disabled in the Siphon Sandbox');
  }
}
