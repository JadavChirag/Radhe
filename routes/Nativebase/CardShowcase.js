import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class CardShowcaseExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>Nebula Holiday</Text>
                  <Text note>5 Night 4 Days Thailand</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
			  <CardItem cardBody>
              <Image source={{uri: 'http://203.88.139.169:9065/Content/Mobile/Holidays/img_thailand_holidays6.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
			<Text></Text>
                <Text note style={{ fontSize: 15, lineHeight: 20,alignItems: 'center', justifyContent: 'center' }}>
                  Land in Bangkok to a warm welcome! Our  representative will take you on a 2.5 hour drive to Pattaya, a breathtakingly beautiful beach destination. It is here that you can hit the bars, bask on the beaches, shop till you drop, pamper yourself with a massage and relish mouth-watering Thai cuisine. And what does one say about the nightlife in Pattaya? Well, it is one of the most happening in the world.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}