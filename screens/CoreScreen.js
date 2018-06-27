import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Video, Camera, Permissions } from 'expo';

import { MonoText } from '../components/StyledText';


export default class CoreScreen extends React.Component {
  static navigationOptions = {};

  state = {
    hasCameraPermission: null,
    cameraType: Camera.Constants.Type.front,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { width } = Dimensions.get('window');
    const { hasCameraPermission, cameraType } = this.state;

    if (hasCameraPermission === null) {
      return <View />
    } else if (hasCameraPermission === false) {
      return <Text
        style={styles.enablePermissionsText}>
        Parrotship doesn't have access to the camera! Please go to Settings > Privacy > Camera and enable Camera Permissions for Expo
      </Text>
    }
    return (
      <View
        style={StyleSheet.absoluteFill}
      >
        <Video
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          //shouldPlay
          resizeMode="cover"
          style={styles.backgroundVideo}
        />
        <Camera
          style={styles.cameraFeed}
          type={cameraType}
        >
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  cameraFeed: {
    position: 'absolute',
    zIndex: 1,
    width: '20%',
    height: '24%',
    top: 20,
    right: 20,
  },
  enablePermissionsText: {
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
});
