import React, { Component } from 'react';
 
import { StyleSheet, View, Text } from 'react-native';

import { StackNavigator } from 'react-navigation';
 
class MainActivity extends Component {
 
static navigationOptions =
   {
      title: 'MainActivity',

      headerStyle: {

      backgroundColor: '#00BCD4'

    }

   };
 
   render()
   {
      return(

         <View style = { styles.MainContainer }>
 
            <Text style={{fontSize: 20}}> Hello Guys </Text>
          
         </View>
      );
   }
}
 
export default ActivityProject = StackNavigator(
{
  
  First: { screen: MainActivity }

});

const styles = StyleSheet.create({
 
  MainContainer :
  {
      flex:1,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
  }

});