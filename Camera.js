import React, {
  Component,
} from 'react-native';

export default class Camera extends Component {

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
