import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs,Button,Body,Title,Left,Icon,Right} from 'native-base';
import TabPlaceToVisit from './PlaceToVisit';
import TabVideos from './Videos';
import { StatusBar } from "react-native";

export default class AttractionScreen extends React.Component {
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
            <Title>Attractions</Title>
          </Body>
          <Right />
        </Header>
        <Tabs initialPage={0}>
          <Tab heading="Places to visit">
            <TabPlaceToVisit />
          </Tab>
          <Tab heading="Videos">
            <TabVideos />
          </Tab>
        </Tabs>
        
      </Container>
    );
  }
}
