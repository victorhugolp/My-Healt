import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View, Text, StyleSheet, Image} from 'react-native';

const MyDrawer = props => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>Olá Jurandir</Text>
        <View style={styles.divisor} />
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sair"
        labelStyle={styles.drawerText}
        icon={() => (
          <Image
            style={styles.icone}
            source={require('../assets/imagens/sair.png')}
          />
        )}
        onPress={() => {
          props.navigation.pop();
        }}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#ADD4D0',
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 30,
  },
  text: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#419ED7',
    fontSize: 24,
    marginBottom: 25,
  },
  drawerText: {
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
  divisor: {
    backgroundColor: '#419ED7',
    width: '80%',
    height: 2,
  },
});

export default MyDrawer;
