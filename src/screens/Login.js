import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

import {bindActionCreators} from 'redux';
import * as todoActions from '../actions/todos';

import Header from '../components/Header';
import {connect} from 'react-redux';

function Login({addValue, decreaseValue, todos}) {
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('test redux', todos);
  }, [todos]);

  const clickAdd = () => {
    if (text != '') {
      addValue(text);
      setText('');
    }
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text>Login</Text>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TouchableOpacity style={styles.button} onPress={() => clickAdd()}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <Text style={styles.title}>List:</Text>
        {todos.length > 0 &&
          todos.map((value, index) => (
            <View key={value.id} style={styles.todo}>
              <Text>{value.text}</Text>
              <TouchableOpacity
                style={styles.buttonDone}
                onPress={() => decreaseValue(index)}>
                <Text style={styles.textDone}>Done</Text>
              </TouchableOpacity>
            </View>
          ))}
      </View>
    </>
  );
}

const mapState = (state) => ({todos: state.todos});
const mapDispatch = (dispatch) => bindActionCreators(todoActions, dispatch);

export default connect(mapState, mapDispatch)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  button: {
    width: 50,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
  },
  input: {
    marginVertical: 20,
    width: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 5,
  },
  todo: {
    flexDirection: 'row',
    marginVertical: 5,
    marginLeft: 20,
  },
  buttonDone: {
    marginLeft: 5,
    width: 50,
    borderWidth: 1,
    backgroundColor: '#000',
    borderRadius: 5,
    alignItems: 'center',
  },
  textDone: {color: '#fff'},
});
