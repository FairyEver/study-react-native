import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// APP
export default class extends Component {
  state = {
    like: 0
  }
  handlePress = () => {
    this.setState({
      like: this.state.like + 1
    })
  }
  render() {
    const { like } = this.state
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePress}>
          <Image source={require('./assets/like.png')} />
        </TouchableOpacity>
        <Text style={styles.title}>
          Like {like}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 60
  }
});
