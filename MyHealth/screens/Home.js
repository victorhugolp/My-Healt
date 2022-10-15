import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyDrawer from '../components/MyDrawer';
import MinhasVacinas from './MinhasVacinas';
import ProximasVacinas from './ProximasVacinas';
import NovaVacina from './NovaVacina';
import EditarVacina from './EditarVacina';
import {StyleSheet, Image} from 'react-native';

const Drawer = createDrawerNavigator();

export const listaVacinas = [
  {
    vacina: 'BCG',
    data: '11/06/2022',
    dose: 'Dose única',
    imagem: require('../assets/imagens/comprovante.png'),
    proximaVacina: '',
  },
  {
    vacina: 'Febre Amarela',
    data: '11/10/2022',
    dose: '1a. dose',
    imagem: require('../assets/imagens/comprovante.png'),
    proximaVacina: '11/06/2023',
  },
  {
    vacina: 'Hepatite B',
    data: '11/08/2022',
    dose: '1a. dose',
    imagem: require('../assets/imagens/comprovante.png'),
    proximaVacina: '11/10/2022',
  },
  {
    vacina: 'Poliomielite',
    data: '11/08/2022',
    dose: '1a. dose',
    imagem: require('../assets/imagens/comprovante.png'),
    proximaVacina: '11/10/2022',
  },
];

const Home = () => {
  return (
    <Drawer.Navigator drawerContent={props => <MyDrawer {...props} />}>
      <Drawer.Screen
        name="MinhasVacinas"
        component={MinhasVacinas}
        options={{
          unmountOnBlur: true,
          headerStyle: {backgroundColor: '#C1E7E3'},
          headerTitleStyle: styles.headerTitleStyle,
          headerTitle: 'Minhas vacinas',
          drawerLabel: 'Minhas vacinas',
          drawerLabelStyle: styles.text,
          drawerIcon: () => (
            <Image
              style={styles.icone}
              source={require('../assets/imagens/vacina.png')}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="ProximasVacinas"
        component={ProximasVacinas}
        options={{
          unmountOnBlur: true,
          headerStyle: {backgroundColor: '#C1E7E3'},
          headerTitleStyle: styles.headerTitleStyle,
          headerTitle: 'Próximas vacinas',
          drawerLabel: 'Próximas vacinas',
          drawerLabelStyle: styles.text,
          drawerIcon: () => (
            <Image
              style={styles.icone}
              source={require('../assets/imagens/proximasVacinas.png')}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="NovaVacina"
        component={NovaVacina}
        options={{
          unmountOnBlur: true,
          headerStyle: {backgroundColor: '#C1E7E3'},
          headerTitleStyle: styles.headerTitleStyle,
          headerTitle: 'Minhas vacinas',
          drawerItemStyle: {display: 'none'},
        }}
      />
      <Drawer.Screen
        name="EditarVacina"
        component={EditarVacina}
        options={{
          unmountOnBlur: true,
          headerStyle: {backgroundColor: '#C1E7E3'},
          headerTitleStyle: styles.headerTitleStyle,
          headerTitle: 'Minhas vacinas',
          drawerItemStyle: {display: 'none'},
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#419ED7',
    fontSize: 20,
  },
  icone: {
    width: 25,
    height: 25,
    marginRight: -25,
    resizeMode: 'contain',
  },
  headerTitleStyle: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 30,
    color: '#419ED7',
    marginLeft: -25,
  },
});

export default Home;
