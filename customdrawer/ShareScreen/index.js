import React from "react";
import { AppRegistry, Alert,StyleSheet,Share,Clipboard,ToastAndroid } from "react-native";
import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  H1,
  H3,
  View,
  Item,
  Input
} from "native-base";

import { StackNavigator } from "react-navigation";


export default class ShareItRouterScreen extends React.Component {
	  componentDidMount() {
		if (this.props.navigation.state.params !== undefined) {
		  Alert.alert("USER found", this.props.navigation.state.params.name);
		}
	  }
  
	  onClick() {
	  Share.share({
		message: "Hi,download the Nebula Holiday mobile app and earn Rs.2000 for your package booking.You can further earn up to Rs.7000 by referring your friends or family.Enter this code\"nebulayx8r\" while signing up or click on https://play.google.com/store/apps/details?id=com.nebulacompanies.nebula&hl=en",
		url: 'http://nebulaholidays.com',
		title: 'Get Rs.1500 for your next holiday package booking'
	  }, {
		 dialogTitle: 'Share Nebula Holidays goodness',
		 excludedActivityTypes: [
		  'com.apple.UIKit.activity.PostToTwitter'
		]
	  })
	}
  
  render() {
    return (
     <Container>
       <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Refer & Earn</Title>
          </Body>
          <Right />
        </Header>
		<Content style={{backgroundColor: 'white'}}>
        <Content padder>
		<View style = {{ justifyContent: 'center', alignItems: 'center',marginBottom:20}}>
		   <H1 >Referral Code</H1>
		   <Text note style={{ fontSize: 15,alignItems: 'center', justifyContent: 'center' }}>Enter details below.</Text>
		   </View>
          <Card style = {{ justifyContent: 'center', alignItems: 'center',padding:10}}>
            <CardItem>
				 <Item >
					<Input placeholder='Enter referral code here'/>
					<Icon name='ios-alert-outline' style={{fontSize: 25, color: '#CFD8DC'}} />
				</Item>
			  
			  </CardItem>
			  <CardItem>
			   <Button
			    small
				rounded
				primary
				style={{ marginTop: 10,padding:20,height:45}}
				onPress={() => this.props.navigation.navigate("EditScreenOne")}>
					<Text>Apply</Text>
			</Button>
		  </CardItem>
          </Card>
         
		 <Card style = {{ justifyContent: 'center', alignItems: 'center',padding:10}}>
              <CardItem>
				<View style = {{ justifyContent: 'center', alignItems: 'center',marginBottom:5}}>
					<H3>Invite your friends and get buzz points.</H3>
					<Text note style={{ fontSize: 12,alignItems: 'center', justifyContent: 'center',marginTop:5 }}>Share your code with your friends and get bonus points</Text>
			  </View>
		     </CardItem>
			  <CardItem>
				<Button
			    small
				rounded
				info
				style={{ marginTop: 10,padding:20,height:45}}
				onPress={ this.onClick }
				>
					<Text>Share Referral</Text>
				</Button>
			</CardItem>
          </Card>
		  
		  <Card >
            <CardItem >
              <Icon active name="ios-browsers-outline" style={{fontSize: 25, color: 'blue'}} />
              <Text note>Your Referral Code </Text>
			  <Text note style={{ fontSize: 15,alignItems: 'center', justifyContent: 'center',marginLeft:15,color: 'red',fontWeight: 'bold' }}>nebulayx8r</Text>
			  <Right>
			  <Text note onPress={() => { Clipboard.setString('nebulayx8r'); ToastAndroid.show('Code copied.Paste to share', ToastAndroid.SHORT);}}>Tap to Copy</Text>
              </Right>
            </CardItem>
          </Card>
		  
        </Content>
	  </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

	 MainContainer :{
	   justifyContent: 'center',
	   backgroundColor:'white',
	   flex:1,
	 },
});

