import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // You may need to install a vector icon library

const MigrosScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Migros Screen</Text>
  </View>
);

const ListScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>List Screen</Text>
  </View>
);

const WalletScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Wallet Screen</Text>
  </View>
);

const SubitoGoScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>SubitoGo Screen</Text>
  </View>
);

const AppNavigator = createBottomTabNavigator(
  {
    Migros: {
      screen: MigrosScreen,
      navigationOptions: {
        tabBarLabel: 'Migros',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="M" size={24} color={tintColor} />
        ),
      },
    },
    List: {
      screen: ListScreen,
      navigationOptions: {
        tabBarLabel: 'List',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="list" size={24} color={tintColor} />
        ),
      },
    },
    Wallet: {
      screen: WalletScreen,
      navigationOptions: {
        tabBarLabel: 'Wallet',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="account-balance-wallet" size={24} color={tintColor} />
        ),
      },
    },
    SubitoGo: {
      screen: SubitoGoScreen,
      navigationOptions: {
        tabBarLabel: 'SubitoGo',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="go" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'blue', // Change this to your desired active tab color
      inactiveTintColor: 'gray', // Change this to your desired inactive tab color
    },
  }
);

export default createAppContainer(AppNavigator);
