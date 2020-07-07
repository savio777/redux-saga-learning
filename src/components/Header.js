import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

function Header({todos}) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textTitle}>ToDos: {todos.length}</Text>
      </View>
    </View>
  );
}

const mapState = (state) => ({todos: state.todos});

export default connect(mapState, null)(Header);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 40,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#7d7d7d',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    textAlign: 'center',
    color: '#000',
  },
});