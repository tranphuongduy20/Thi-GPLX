import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import * as EvaIcon from '../src/icon/EvaIcon'
const { Navigator, Screen } = createBottomTabNavigator();

import TrangchuScreen from './BottomTabs/trangchu.component'
import ThithuScreen from './BottomTabs/thithu.component'
import { TracuuNavigator } from './BottomTabs/TracuuTab/TracuuNavigator.component'
const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='Trang chủ' icon={EvaIcon.HomeIcon}/>
    <BottomNavigationTab title='Thi thử' icon={EvaIcon.TestIcon}/>
    <BottomNavigationTab title='Tra cứu' icon={EvaIcon.SearchIcon}/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='TrangchuScreen' component={TrangchuScreen}/>
    <Screen name='ThithuScreen' component={ThithuScreen}/>
    <Screen name='TracuuNavigator' component={TracuuNavigator}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
);