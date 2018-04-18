import React from "react";
import { AppRegistry, Alert,Image} from "react-native";

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
  View,
  List, ListItem
} from "native-base";

import { StackNavigator } from "react-navigation";
import { Rating } from 'react-native-elements';

const items = [{ID:1,Title:'Seat in coach transfers and sightseeing(Coach is non exclusive).'},
			 {ID:2,Title:'2 nights with breakfast at 3* Deluxe Hotel in Pattaya (All Seasons Pattaya or similar).'},
			 {ID:3,Title:'2 nights with breakfast at 3* Deluxe Hotel in Bangkok(All Seasons Siam or similar).'},
			 {ID:4,Title:'4 dinners in Indian restaurant without transfers.'},
			 {ID:5,Title:'Half day coral island tour with lunch.'},
			 {ID:6,Title:'Half day Bangkok city tour with gems gallery(No Lunch).'},
			 {ID:7,Title:'Travel Insurance'},];

export default class HolidayPackageDetails extends React.Component {
 
  render() {
	  
	const { params } = this.props.navigation.state;
    const itemId = params ? params.ID : null;
    const otherParam = params ? params.Title : null;
	  
    return (
      <Container style={{backgroundColor:'white' }}>
	 <Content>
	 	    <Image source={{uri: 'http://203.88.139.169:9065/Content/Mobile/Holidays/pattaya_beach.jpg'}} style={{height: 200, width: null, flex: 1}}/>
		
	    	<Button
              transparent
			  style={{
              height: 90,
              position: "absolute",
            }}
              onPress={() => this.props.navigation.navigate("Home")}>
              <Icon name="arrow-back" style={{fontSize: 25, color: 'white'}} />
			  <Text style={{fontSize: 15, color: 'white'}}>{otherParam} </Text>
            </Button>
   			
			<Card style={{flex: 0,flexDirection: 'column',borderColor:'white',borderWidth:0,marginLeft:5,marginRight:5}}>
				<CardItem style={{flex: 1,flexDirection: 'row',borderColor:'white',borderWidth:0}}>
				  <Text style={{fontSize: 12, color: 'black',width:'70%'}}>Inclusions summary </Text>
				    <Text note style={{ fontSize: 12, lineHeight: 20, justifyContent: 'flex-end',width:'50%'}}>Tap to view details</Text>
				</CardItem>
				<View style={{flex: 0,height:1,backgroundColor:'black'}}/>
				
				<CardItem style={{flex: 0,flexDirection: 'row',borderColor:'white',borderWidth:0,alignItems: 'center', justifyContent: 'center'}}>
				   <View style={{height: 60, marginRight:20,marginLeft:20,justifyContent: 'center',}}>
				    <Icon name="ios-restaurant" style={{fontSize: 35, color: 'grey'}} />
				    <Text  style={{ fontSize: 12, lineHeight: 20, }}>Hotels</Text> 
				   </View>
				   
				   <View style={{height: 60, marginRight:20,marginLeft:20,justifyContent: 'center',alignItems: 'center'}}>
				    <Icon name="car" style={{fontSize: 35, color: 'grey'}} />
				    <Text  style={{ fontSize: 12, lineHeight: 20, }}>Transfer</Text> 
				   </View>
				   
				   <View style={{height: 60, marginRight:20,marginLeft:20,justifyContent: 'center'}}>
				    <Icon name="ios-beer" style={{fontSize: 35, color: 'grey'}} />
				    <Text  style={{ fontSize: 12, lineHeight: 20, }}>Meals</Text> 
				   </View>
				   
				   <View style={{height: 60, marginRight:20,marginLeft:20,justifyContent: 'center',alignItems: 'center'}}>
				    <Icon name="ios-eye" style={{fontSize: 35, color: 'grey'}} />
				    <Text  style={{ fontSize: 12, lineHeight: 20, }}>Sightseeing</Text> 
				   </View>
				  
				</CardItem>
				
			</Card>
		
			
			<Card style={{flex: 0,flexDirection: 'column',borderColor:'white',borderWidth:0,marginLeft:5,marginRight:5}}>
				<CardItem style={{flex: 1,flexDirection: 'row',borderColor:'white',borderWidth:0}}>
				  <Text style={{fontSize: 12, color: 'black',width:'70%'}}>Hotels</Text>
				</CardItem>
				<View style={{flex: 0,height:1,backgroundColor:'black'}}/>
				
				<CardItem style={{flex: 0,flexDirection: 'row',borderColor:'white',borderWidth:0,alignItems: 'center', justifyContent: 'center'}}>
				
				<Card style={{height: 200,justifyContent: 'center'}}>
				<Image source={{uri: 'http://www.marblegardenview.co.th/images/content/slide4.jpg'}} style={{height: 80, width: '100%', flex: 1}}/>
				 <Button rounded style={{height:25,position: "relative", position: 'absolute',top: 80,left: 40}}>
                      <Text>Included</Text>
                   </Button>
				  <CardItem style={{flex: 0,flexDirection: 'row',borderColor:'white',borderWidth:0,alignItems: 'center', justifyContent: 'center'}}>
				  
				   <View style={{justifyContent: 'center',alignItems: 'center',marginTop:10}}>
				    <Text  style={{ fontSize: 12, lineHeight: 20, }}>Marble Garden Hotel</Text> 
					<Text note style={{ fontSize: 12, lineHeight: 20,marginTop:5}}>Pattaya</Text>
					<Rating
				 type="star"
				 startingValue={3.8}
				 readonly
				 ratingColor='#9C27B0'
				 imageSize={15}
				 style={{ paddingVertical: 1,marginBottom:5,marginTop:5 }}/>
				   </View>
				</CardItem>
				</Card>
				
				<Card style={{height: 200,justifyContent: 'center'}}>
				<Image source={{uri: 'https://www.royaltycoonplace.in/images/portfolio/thumb/207.jpg'}} style={{height: 80, width: '100%', flex: 1}}/>
				 <Button rounded style={{height:25,position: "relative", position: 'absolute',top: 80,left: 40}}>
                      <Text>Included</Text>
                   </Button>
				  <CardItem style={{flex: 0,flexDirection: 'row',borderColor:'white',borderWidth:0,alignItems: 'center', justifyContent: 'center'}}>
				  
				   <View style={{justifyContent: 'center',alignItems: 'center',marginTop:10}}>
				    <Text  style={{ fontSize: 12, lineHeight: 20, }}>Royal Tycoon Place</Text> 
					<Text note style={{ fontSize: 12, lineHeight: 20,marginTop:5}}>Pattaya</Text>
					<Rating
				 type="star"
				 startingValue={3.4}
				 readonly
				 ratingColor='#9C27B0'
				 imageSize={15}
				 style={{ paddingVertical: 1,marginBottom:5,marginTop:5 }}/>
				   </View>
				</CardItem>
				</Card>
			</CardItem>
			
			
			<CardItem style={{flex: 0,flexDirection: 'row',borderColor:'white',borderWidth:0,alignItems: 'center', justifyContent: 'center'}}>
				
				<Card style={{height: 200,justifyContent: 'center'}}>
				<Image source={{uri: 'http://www.checkinnonline.com/regencypark/banner/checkinnonlinehotel-regencyparksukhumvit-02.jpg'}} style={{height: 80, width: '100%', flex: 1}}/>
				 <Button rounded style={{height:25,position: "relative", position: 'absolute',top: 80,left: 40}}>
                      <Text>Included</Text>
                   </Button>
				  <CardItem style={{flex: 0,flexDirection: 'row',borderColor:'white',borderWidth:0,alignItems: 'center', justifyContent: 'center'}}>
				  
				   <View style={{justifyContent: 'center',alignItems: 'center',marginTop:10}}>
				    <Text  style={{ fontSize: 12, lineHeight: 20, }}>Regency Park</Text> 
					<Text note style={{ fontSize: 12, lineHeight: 20,marginTop:5}}>Bangkok</Text>
					<Rating
				 type="star"
				 startingValue={3.8}
				 readonly
				 ratingColor='#9C27B0'
				 imageSize={15}
				 style={{ paddingVertical: 1,marginBottom:5,marginTop:5 }}/>
				   </View>
				</CardItem>
				</Card>
				
				<Card style={{height: 200,justifyContent: 'center'}}>
				<Image source={{uri: 'http://www.theseasons-hotels.com/huamark/picture/gallery/Exterior/p-1.jpg'}} style={{height: 80, width: '100%', flex: 1}}/>
				 <Button rounded style={{height:25,position: "relative", position: 'absolute',top: 80,left: 40}}>
                      <Text>Included</Text>
                   </Button>
				  <CardItem style={{flex: 0,flexDirection: 'row',borderColor:'white',borderWidth:0,alignItems: 'center', justifyContent: 'center'}}>
				  
				   <View style={{justifyContent: 'center',alignItems: 'center',marginTop:10}}>
				    <Text  style={{ fontSize: 12, lineHeight: 20, }}>The Seasons Huamark</Text> 
					<Text note style={{ fontSize: 12, lineHeight: 20,marginTop:5}}>Bangkok</Text>
					<Rating
				 type="star"
				 startingValue={3.5}
				 readonly
				 ratingColor='#9C27B0'
				 imageSize={15}
				 style={{ paddingVertical: 1,marginBottom:5,marginTop:5 }}/>
				   </View>
				</CardItem>
				</Card>
			</CardItem>
		
		</Card>
		
		
		<Card style={{flex: 0,flexDirection: 'column',borderColor:'white',borderWidth:0,marginLeft:5,marginRight:5}}>
				<CardItem style={{flex: 1,flexDirection: 'row',borderColor:'white',borderWidth:0}}>
				  <Text style={{fontSize: 12, color: 'black',width:'70%'}}>Inclusions</Text>
				</CardItem>
				<View style={{flex: 0,height:1,backgroundColor:'black'}}/>
				<CardItem>
				  	<List
		      style={{backgroundColor: 'white'}}
             dataArray={items}
             renderRow={data => {
              return (
                <ListItem>
				 <Body>
					<Text note style={{ fontSize: 12, alignSelf:'baseline',color:'black' }}>{data.Title}</Text>
				   </Body>
              </ListItem>
              );
            }}
          />
				</CardItem>
				
			
				
	</Card>
		
		
	 </Content>
	 
	 
      
      </Container>
    );
  }
}
