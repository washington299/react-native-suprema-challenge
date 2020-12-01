import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import ShoppingCartList from './pages/ShoppingCartList';

import ShoppingCartIcon from './components/ShoppingCartIcon';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1e90ff',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
    }}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => ({
        title: 'Games',
        headerRight: () => <ShoppingCartIcon navigation={navigation} />,
        headerRightContainerStyle: {
          paddingRight: 5,
        },
      })}
    />
    <Stack.Screen
      name="Shopping Cart"
      component={ShoppingCartList}
      options={{ title: 'Shopping cart' }}
    />
  </Stack.Navigator>
);

export default Routes;
