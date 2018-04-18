import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text,Left,Body,Thumbnail,Card,CardItem} from 'native-base';
import {Image} from "react-native";

const items = [{Title:'Phra Nakhon Si Ayutthaya (near Bangkok)',URL:'http://203.88.139.169:9065//Content/Mobile/Holidays/Gallery/img61.jpg',Description:'Phra Nakhon Si Ayutthaya this demo is Description phra'},
			 {Title:'Wat Arun(Bangkok)',URL:'http://203.88.139.169:9065//Content/Mobile/Holidays/Gallery/img62.jpg',Description:'Phra Nakhon Si Ayutthaya this demo is Description phra'},
			 {Title:'Art In Paradise (Pattaya)',URL:'http://203.88.139.169:9065//Content/Mobile/Holidays/Gallery/img63.jpg',Description:'Phra Nakhon Si Ayutthaya this demo is Description phra'},
			 {Title:'Kite Surfing (Pattaya)',URL:'http://203.88.139.169:9065//Content/Mobile/Holidays/Gallery/img64.jpg',Description:'Phra Nakhon Si Ayutthaya this demo is Description phra'},
			 {Title:'Flyboard (Pattaya)',URL:'http://203.88.139.169:9065//Content/Mobile/Holidays/Gallery/img65.jpg',Description:'Phra Nakhon Si Ayutthaya this demo is Description phra'},
			 {Title:'Floating Market (Bangkok)',URL:'http://203.88.139.169:9065//Content/Mobile/Holidays/Gallery/img66.jpg',Description:'Phra Nakhon Si Ayutthaya this demo is Description phra'},
			 {Title:'Traditional Thai costume',URL:'http://203.88.139.169:9065//Content/Mobile/Holidays/Gallery/img67.jpg',Description:'Phra Nakhon Si Ayutthaya this demo is Description phra'},
			 {Title:'Underwater world (Pattaya)',URL:'http://203.88.139.169:9065//Content/Mobile/Holidays/Gallery/img68.jpg',Description:'Phra Nakhon Si Ayutthaya this demo is Description phra'}];

export default class PlaceToVisitScreen extends Component {
  render() {
    return (
      <Container>
        
        <Content>
           <List
            dataArray={items}
            contentContainerStyle={{ marginTop: 10 }}
            renderRow={data => {
              return (
                <ListItem>
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
