import React from 'react';
import { SafeAreaView } from 'react-native';
import {Layout, Text,TopNavigation,Button,Divider } from '@ui-kitten/components';
import * as EvaIcon from '../../../src/icon/EvaIcon'

export const TracuuScreen=({navigation}) => {
    const navigateScreen = (ScreenName) => {
      navigation.navigate(ScreenName);
    };

    return(
      <SafeAreaView style={{ flex: 1 }}>
        <TopNavigation title='Tra cứu' alignment='center'/>
        <Divider/>
        <Layout style={{ flex: 1, alignItems: 'center'}}>
          <Button accessoryLeft={EvaIcon.CarIcon} size='giant' appearance='outline' onPress={()=>navigateScreen('SahinhScreen')} style={{marginBottom: "1%",width: "98%"}}>Tra cứu Sa hình</Button>
          <Button accessoryLeft={EvaIcon.SignIcon} size='giant' appearance='outline' onPress={()=>navigateScreen('BienbaoScreen')} style={{marginBottom: "1%",width: "98%"}}>Tra cứu Biển báo</Button>
          <Button accessoryLeft={EvaIcon.AwardIcon} size='giant' appearance='outline' onPress={()=>navigateScreen('MeothiScreen')} style={{marginBottom: "1%",width: "98%"}}>Tra cứu Mẹo thi</Button>
        </Layout>
      </SafeAreaView>
    )
};
