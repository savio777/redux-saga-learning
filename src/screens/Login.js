import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

import {bindActionCreators} from 'redux';
import * as todoActions from '../actions/user';

import Header from '../components/Header';
import {connect} from 'react-redux';

function Login({requestLogin, user}) {
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('test redux', user);
  }, [user]);

  const login = () => {
    if (text != '') {
      requestLogin(text);
      setText('');
    }
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(text) => setText(text)}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={() => login()}>
          <Text style={styles.buttonText}>logar</Text>
        </TouchableOpacity>
        {user.error != '' && <Text style={styles.textError}>{user.error}</Text>}
      </View>
    </>
  );
}

const mapState = (state) => ({user: state.user});
const mapDispatch = (dispatch) => bindActionCreators(todoActions, dispatch);

export default connect(mapState, mapDispatch)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
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
  textError: {color: '#e81809', marginVertical: 10},
});
