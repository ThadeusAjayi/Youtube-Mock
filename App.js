import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Youtube from './examples/YoutubeUI';

export default class App extends React.Component {
  render() {
    return (
      <Youtube />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
