import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class CoreScreen extends React.Component {
  static navigationOptions = {};

  render() {
    return (
      <View>
        <ScrollView>
            <MonoText style={styles.codeHighlightText}>Core Flow Screen</MonoText>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
