import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text,Left,Body,Thumbnail,Card,CardItem,Button,Title,Right,Icon} from 'native-base';
import {Image} from "react-native";

const items = [{Title:'Holidays Launch Event (26 Aug 2017)',URL:'http://neb.hksolutions.in/Images/VideoThumbnails/thumb_present_by_nebula.jpg',Description:'Nebula'},
			 {Title:'Thailand Holiday Pacakage',URL:'http://neb.hksolutions.in/Images/VideoThumbnails/thum_wel_come_thailand.jpg',Description:'Nebula'}];
			 

export default class VideoScreen extends Component {
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
            <Title>Videos</Title>
          </Body>
          <Right />
        </Header>
        <Content>
           <List
            dataArray={items}
            renderRow={data => {
              return (
                <ListItem onPress={() => this.props.navigation.navigate("DrawerOpen")}>
				 <Card >
			     <Image source={{ uri: data.URL }} style={{height: 200, width: null, flex: 1}}/>
			      <CardItem>
				    <Text note style={{ fontSize: 12, lineHeight: 20,alignItems: 'center', justifyContent: 'center' }}>{data.Title}</Text>
                  </CardItem>
			  </Card>
	   
           </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
