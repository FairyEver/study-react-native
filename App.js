import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Header extends Component {
  static defaultProps = {
    title: 'Header default'
  }
  render () {
    return (
      <View style={styles.header}>
        <Text>{this.props.title}</Text>
      </View>
    )
  }
}

class Main extends Component {
  render () {
    return (
      <View style={styles.main}>
        <Text>main</Text>
      </View>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header></Header>
        <Main></Main>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45
  },
  header: {
    height: 60,
    backgroundColor: '#abcdef'
  },
  main: {
    flex: 1,
    height: 60,
    backgroundColor: '#CCC'
  }
});
