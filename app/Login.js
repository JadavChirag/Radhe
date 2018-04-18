/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  Button
} from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;
var axios = require('axios');
var axiosProfile = require('axios');
var token;


const User = t.struct({
  email: t.String,
  password: t.String,
  });

const options = {
    fields: {
      email: {
        error: 'Without an email address how are you going to reset your password when you forget it?'
      },
      password: {
        error: 'Choose something you use on a dozen other sites or something you won\'t remember'
      }
    },
  };

export default class Login extends Component {

handleSubmit = () => {
    // do the things
    const value = this._form.getValue(); // use that ref to get the form value
        console.log('value: ', value);

 axios.post('http://appsdata2.cloudapp.net/jwt-demo/public/api/login',value)
          .then(function (response) {
          var dataObject=response.data;
            console.log('Response Details',response.data);
            console.log('User Name ',dataObject.data.user.name);
            token=dataObject.data.user.token;
            console.log('Token',token);

var authOptions = {
               method: 'POST',
               url: 'http://appsdata2.cloudapp.net/jwt-demo/public/api/profile',
               headers: { Authorization: "Bearer " + token },
               json: true
             };
             axiosProfile(authOptions)
                 .then(function(response){
                   console.log(response.data);
                   var dataDetails=response.data;

                   Alert.alert("User Id : "+ dataDetails.data.user.id
                   +"\n User Name : "+dataDetails.data.user.name
                   +"\n Email : "+dataDetails.data.user.email);
                   })
                 .catch(function(error){
                   console.log(error);
                 });
          })
          .catch(function (error) {
            console.log(error);
          });
}

profile = () =>{



}

  render() {
    return (
      <View style={styles.container}>
        <Form type={User} ref={c => this._form = c} options={options} />
        <Button  title="Login!" onPress={this.handleSubmit}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',

  },
});
