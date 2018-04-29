import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// APP
export default class extends Component {
  state = {
    like: 0
  };
  componentDidMount () {
    this.timer = setInterval(() => {
      const newValue = this.state.like + 1;
      this.setState({
        like: newValue
      });
      if (newValue > 10) {
        clearInterval(this.timer);
        this.timer = null;
        alert('倒计时停止')
      }
    }, 300);
  };
  componentWillUnmount () {
    clearInterval(this.timer);
  };
  render() {
    const { like } = this.state;
    return (
      <View style={styles.container}>
        { this.state.like <= 10 ? <Text style={styles.title}>[ Like {like} ]</Text> : <Text>end</Text> }
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 60,
    marginTop: 30
  }
});
