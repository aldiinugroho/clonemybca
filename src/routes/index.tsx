import * as React from 'react';
import { CommonActions, NavigationContainer, StackActions, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../screens';

const navigationRef = createNavigationContainerRef()
export function navigateTo(name: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(name, params));
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.goBack());
  }
}

export function reset(name: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: name,
            params: params,
          },
        ],
      })
    );
  }
}

export function pop(count?: number) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop(count));
  }
}

export function push(name: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
}

export function popToTop() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.popToTop());
  }
}

const Stack = createNativeStackNavigator();

function Routes(): React.JSX.Element {
  return(
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName='Auth'
      >
        <Stack.Screen
          name='Auth'
          component={Screens.Auth}
          options={{ title: 'Auth' }}
        />
        <Stack.Screen
          name='Home'
          component={Screens.Home}
          options={{ title: 'Overview' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default Routes