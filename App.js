import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class Show extends Component {
  state = {
    count: 0
  };
  addCount = (count) => {
    this.setState({
      count: this.state.count + count
    })
  };
  render () {
    return (
      <Text style={styles.title}>{this.state.count}</Text>
    )
  }
}

// APP
export default class extends Component {
  handlePress = () => {
    // 新的写法 但是我觉得有点麻烦
    // this.Show.addCount(20)
    this.refs.Show.addCount(20)
  };
  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePress}>
          <Text style={styles.title}>点我加20</Text>
        </TouchableOpacity>
        {/*新的写法 但是我觉得有点麻烦*/}
        {/*<Show ref={Show => {this.Show = Show}} />*/}
        <Show ref="Show" />
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
