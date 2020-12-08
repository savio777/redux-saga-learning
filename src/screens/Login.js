import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';

import Header from '../components/Header';
import logo from '../assets/github-mark.png';
import {bindActionCreators} from 'redux';
import * as todoActions from '../actions/user';
import {connect} from 'react-redux';

function Login({user, requestLogin, logout}) {
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('test redux', user);
  }, [user]);

  const login = () => {
    requestLogin(text);
    setText('');
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Header />
      <View style={styles.containerImg}>
        <Image source={logo} style={styles.img} />
      </View>
      <View style={styles.container}>
        {user.loading && (
          <Text style={{textAlign: 'center', marginVertical: 20}}>
            Animação Carregando
          </Text>
        )}
        {!user.logado ? (
          <>
            <TextInput
              style={styles.input}
              value={text}
              onChangeText={(value) => setText(value)}
              autoCapitalize="none"
              placeholder="Seu usário"
              placeholderTextColor="#9e9e9e"
            />
            <TouchableOpacity style={styles.button} onPress={() => login()}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={{marginBottom: 10}}>
              Deseja continua como {user.user}?
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => logout()}>
              <Text style={styles.buttonText}>Mudar</Text>
            </TouchableOpacity>
          </>
        )}
        {user.error !== '' && (
          <Text style={styles.textError}>{user.error}</Text>
        )}
      </View>
    </View>
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
    width: 70,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    alignItems: 'center',
    padding: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#000',
  },
  input: {
    marginVertical: 20,
    width: '40%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 5,
    textAlign: 'center',
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
  containerImg: {alignItems: 'center', marginVertical: 20},
  img: {width: 50, height: 50},
});
