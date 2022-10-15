import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import Senha from './screens/Senha';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={props => ({
            headerStyle: {backgroundColor: '#C1E7E3'},
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity
                style={styles.containerLogo}
                onPress={props.navigation.goBack}>
                <Image
                  style={styles.logo}
                  source={require('./assets/imagens/vacina.png')}
                />
                <Text style={styles.titulo}>MyHealth</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Senha"
          component={Senha}
          options={props => ({
            headerStyle: {backgroundColor: '#C1E7E3'},
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity
                style={styles.containerLogo}
                onPress={props.navigation.goBack}>
                <Image
                  style={styles.logo}
                  source={require('./assets/imagens/vacina.png')}
                />
                <Text style={styles.titulo}>MyHealth</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  containerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
  },
  logo: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  titulo: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 38,
    textAlign: 'center',
    color: '#419ED7',
  },
});

export default App;
