import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {SahinhScreen} from './sahinh.component'
import {BienbaoScreen} from './bienbao.component'
import {MeothiScreen} from './meothi.component'
import {TracuuScreen} from './tracuu.component'

const { Navigator, Screen } = createStackNavigator();

export const TracuuNavigator = () => (
    <Navigator headerMode='none'>
      <Screen name='TracuuScreen' component={TracuuScreen}/>
      <Screen name='SahinhScreen' component={SahinhScreen}/>
      <Screen name='BienbaoScreen' component={BienbaoScreen}/>
      <Screen name='MeothiScreen' component={MeothiScreen}/>
    </Navigator>
  );