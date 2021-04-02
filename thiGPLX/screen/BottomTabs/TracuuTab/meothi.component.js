import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import * as EvaIcon from '../../../src/icon/EvaIcon'

export const MeothiScreen = ({ navigation }) => {
  const BackAction = () => (
    <TopNavigationAction icon={EvaIcon.BackIcon} onPress={()=>navigation.goBack()}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Mẹo thi' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>DETAILS</Text>
      </Layout>
    </SafeAreaView>
  );
};