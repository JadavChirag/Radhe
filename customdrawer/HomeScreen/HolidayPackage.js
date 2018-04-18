import React from "react";
import { StatusBar ,Image} from "react-native";

import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Thumbnail
} from "native-base";

export default class HolidayPackage extends React.Component {
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
            <Title>Nebula Holiday</Title>
          </Body>
          <Right />
        </Header>
        <Content >
		 <Card >
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://png.icons8.com/dusk/2x/beach.png'}} />
                <Body>
                  <Text>Thailand</Text>
                  <Text note>5 Days 4 Night (Bangkok/Patayya)</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
               <Card>
			     <Image source={{uri: 'http://203.88.139.169:9065/Content/Mobile/Holidays/ic_background_thailand_package.jpg'}} style={{height: 200, width: null, flex: 1}}/>
			      <CardItem>
				    <Text note style={{ fontSize: 12, lineHeight: 20,alignItems: 'center', justifyContent: 'center' }}>Bask in the sunshine of Thai beaches and landscapes. Our all exclusive package gives you an opportunity of a lifetime.</Text>
                  </CardItem>
			  </Card>
			  
            </CardItem>
		
     		<CardItem >
              <Left style={{flex: 0,flexDirection: 'column'}}>
			  
			   <CardItem>
			      <Icon name='train' style={{fontSize: 15, color: 'green'}}/>
				  <Text>Hotel : </Text>
				  <Text note>3 star inculded</Text>
			  </CardItem>
			  			  
			 </Left>
             <Right>
                <Text style={{color: 'blue'}} 
				onPress={() => {
				this.props.navigation.navigate('PackageDetails', {
					ID: 1,
					Title: 'Thailand',
					});
				}}>More Details</Text>
              </Right>
            </CardItem>
            
          </Card>
                 
        </Content>
      </Container>
    );
  }
}
