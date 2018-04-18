import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text,Left,Body,Thumbnail,Card,CardItem} from 'native-base';
import {Image} from "react-native";

const items = [{Title:'Bangkok Tour guide',URL:'http://203.88.139.169:9065/Content/Mobile/Holidays/Video/ThumbnailImg/thumb_bangkok_tour.jpg',Description:'Nebula'},
			 {Title:'Coral Island (Ko Lan), Pattaya',URL:'http://203.88.139.169:9065/Content/Mobile/Holidays/Video/ThumbnailImg/thumb_coral_island.jpg',Description:'Nebula'},
			 {Title:'Gems Gallery (Pattaya)',URL:'http://203.88.139.169:9065/Content/Mobile/Holidays/Video/ThumbnailImg/thumb_gems_gallery.jpg',Description:'Nebula'},
			 {Title:'Immigration in Thailand',URL:'http://203.88.139.169:9065/Content/Mobile/Holidays/Video/ThumbnailImg/thumb_immigration.jpg',Description:'Nebula'},
			 {Title:'Dos and Donts in Thailand',URL:'http://203.88.139.169:9065/Content/Mobile/Holidays/Video/ThumbnailImg/thumb_do_and_don.jpg',Description:'Nebula'}
			 ];

export default class VideoScreen extends Component {
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
