import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  Left, 
  Body,
  Thumbnail
} from "native-base";


const routes = [{name:'Home',icon:'https://png.icons8.com/color/2x/home.png',action:'Home'},
     {name:'My Trips',icon:'https://png.icons8.com/office/2x/passenger-with-baggage.png',action:'MyTrips'},
	 {name:"Attractions",icon:'https://png.icons8.com/ios/2x/video-playlist.png',action:'Attractions'},
	 {name:"Videos",icon:'https://png.icons8.com/cotton/2x/tv-show.png',action:'Videos'},
	 {name:"Review",icon:'https://png.icons8.com/color/2x/pencil-tip.png',action:'Review'},
	 {name:"Terms & Condition",icon:'https://png.icons8.com/color/2x/term.png',action:'Terms'},
	 {name:"FAQ",icon:'https://png.icons8.com/color/2x/faq.png',action:'FAQ'},
	 {name:"Help",icon:'https://png.icons8.com/color/2x/strike.png',action:'Support'},
	 {name:"Refer & Earn",icon:'https://png.icons8.com/flat_round/2x/share.png',action:'Share'},
	 {name:"Login",icon:'https://png.icons8.com/ios/2x/login-rounded-up.png',action:'Login'}];

export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
            }}
            style={{
              height: 120,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <Image
            square
            style={{
              height: 90,
              width: 150,
              position: "absolute",
              alignSelf: "center",
              top: 20
            }}
            source={{
              uri:
                "http://nebulaholidays.com/sites/all/themes/nrgtravel/logo.png"
            }}
          />
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => {
              return (
                <ListItem
                  avatar
				  button
                  onPress={() => this.props.navigation.navigate(data.action)}
			    >
				 <Left>
				 <Thumbnail style={{width:30,height:30,position:"absolute",alignSelf: "center"}} source={{ uri: data.icon }} />
              </Left>
			   <Body>
                <Text style={{ marginLeft: 25 }}>{data.name}</Text>
              </Body>
                
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
