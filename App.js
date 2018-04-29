import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// 顶栏
class Header extends Component {
  static defaultProps = {
    title: 'Header default'
  }
  render () {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {this.props.title}
        </Text>
      </View>
    )
  }
}

// 主体布局
class Main extends Component {
  render () {
    return (
      <View style={styles.main}>
        <Text>main</Text>
      </View>
    )
  }
}

// APP
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Hello World" />
        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  // 顶栏
  header: {
    height: 60,
    borderBottomWidth: 0.5,
    borderBottomColor: '#FEA53B',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#FECC3B'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF'
  },
  // 主体
  main: {
    flex: 1,
    height: 60,
    backgroundColor: '#FFF'
  }
});
