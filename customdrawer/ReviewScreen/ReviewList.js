import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text,Left,Body,Thumbnail,Card,CardItem,Button,Title,Right,Icon} from 'native-base';
import {Image} from "react-native";
import { Rating } from 'react-native-elements';


const items = [{Name:'Kumar Pratik',Rate:3.6,Review:'Doing what you like will always keep you happy . .',DateTime:'3:43 pm',URL:'https://cdn-images-1.medium.com/fit/c/100/100/1*ifPwWHODlvfRxNHK4FL7Tw.jpeg'},
			 {Name:'Paulusmack',Rate:0.6,Review:'I am not allowed to use the wallet money as I wish to. This is not good.',DateTime:'3:43 pm',URL:'https://avatars1.githubusercontent.com/u/54884?v=4'},
			 {Name:'Mamta Tank',Rate:4,Review:'Its a amazing app. Love using it for research of various places...',DateTime:'March 21, 2018',URL:'https://avatars0.githubusercontent.com/u/34844?v=4'},
			 {Name:'Saurabh Agnihotri',Rate:1,Review:'I can straight hey are doing favor to us and they dont need or appreciate business from clients like us.. .',DateTime:'March 26, 2018',URL:'https://avatars0.githubusercontent.com/u/127790?v=4'},
			 {Name:'Yogesh Raibagi',Rate:3.6,Review:'Doing what you like will always keep you happy . .',DateTime:'3:43 pm',URL:'https://lh3.googleusercontent.com/-trs9l8L7FuY/AAAAAAAAAAI/AAAAAAAABos/LdbkkY-ht40/s48-c-rw/photo.jpg'},
			 {Name:'Neha Dalvi',Rate:2,Review:'Pathetic.. debited from my account... .',DateTime:'March 13, 2018',URL:'https://lh3.googleusercontent.com/-dRDZufJPgb8/AAAAAAAAAAI/AAAAAAAAAdk/m8KQZp8YuVU/s48-c-rw/photo.jpg'},
			 {Name:'Dayanithi Ram',Rate:4.6,Review:'Very worst bus ticket booking.Thats bad experience with make my trip.',DateTime:'March 15, 2018',URL:'https://lh3.googleusercontent.com/-EDJZMGKhDLc/AAAAAAAAAAI/AAAAAAAAABU/bj0SNtgOpEY/s48-c-rw/photo.jpg'},
			 {Name:'Shyam Bajpayee',Rate:2,Review:'Doing what you like will always keep you happy . .',DateTime:'3:43 pm',URL:'https://lh3.googleusercontent.com/-tZaU5L-r93Q/AAAAAAAAAAI/AAAAAAAAAC8/cK73qiExle8/s48-c-rw/photo.jpg'},
			 {Name:'Sunil Varghese',Rate:1.4,Review:'Doing what you like will always keep you happy . .',DateTime:'3:43 pm',URL:'https://avatars3.githubusercontent.com/u/119718?v=4'},
			 {Name:'SHIVAM GHOSAL',Rate:1.0,Review:'Nebula Holiday making u fool..... Plz dont trust their hotels.... The pics of hotel seen online is different when u reach and see.',DateTime:'3:43 pm',URL:'https://avatars0.githubusercontent.com/u/1024025?v=4'}];
			 

export default class ReviewListScreen extends Component {
  render() {
    return (
         <List
            dataArray={items}
			style={{backgroundColor: 'white'}}
            renderRow={data => {
              return (
                <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri:data.URL}} />
              </Left>
              <Body>
                
				<Text>{data.Name}</Text>
				<Rating
				type="star"
				startingValue={data.Rate}
				readonly
				ratingColor='#9C27B0'
				imageSize={15}
				style={{ paddingVertical: 1,marginBottom:5,marginTop:5 }}/>
				<Text note>{data.Review}</Text>
				
				
			</Body>
			
            </ListItem>
              );
            }}
          />
       
    );
  }
}
