import React from "react";
import { AppRegistry, Alert,StyleSheet,Share,ToastAndroid,Dimensions} from "react-native";
import { NavigationActions } from "react-navigation";

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
  Input,
  List,
  ListItem
} from "native-base";

const items = [{ID:1,Title:'General Enquiry'},
			 {ID:2,Title:'Wallet / Referral Bonus'},
			 {ID:3,Title:'Booking Not Visible / Booking Failure'},
			 {ID:4,Title:'Offers / Promtions'},
			 {ID:5,Title:'VISA Enquiry'},
			 {ID:6,Title:'Pre Booking Enquiry'}];


export default class HelpSupport extends React.Component {
	
	static navigationOptions = ({ navigation }) => ({
    header: (
       <View style={{backgroundColor: 'blue',padding:20,flex:0,flexDirection: 'column'}}>
            <H3 style={{color:'white'}}>Hi Guest,</H3>
			<Text note style={{ fontSize: 15,alignItems: 'center', justifyContent: 'center',color:'white'}}>How can we help you?.</Text>
			 <Item >
					<Icon name='ios-search-outline' style={{fontSize: 20, color: '#CFD8DC'}} />
					<Input placeholder='Search' style={{color:'white'}} placeholderTextColor = 'white'/>
			</Item>
	</View>
    )
  });
	   
  render() {
    return (
     <Container>
     
        <Content style={{backgroundColor: 'white'}}>
         <Content padder>
		   <View style = {{ justifyContent: 'center',padding:20}}>
		   <H3 >Have a generic query?</H3>
		   </View>
		   <Body>
    	  <List
		    style={{backgroundColor: 'white',width: (Dimensions.get('window').width)}}
		    dataArray={items}
            renderRow={data => {
              return (
           <ListItem style={{backgroundColor: 'white',borderColor:'white',height:55}}
			 onPress={() => {
            
            this.props.navigation.navigate('HelpDetails', {
              ID: data.ID,
              Title: data.Title,
            });
          }}>
		    <Text>---</Text>
			 <Card style = {{ justifyContent: 'center',padding:5,height:35}}>
			   <CardItem>
					<H3 style={{ fontSize: 15, alignSelf:'baseline',color:'black' }}>{data.Title}</H3>
				</CardItem>
			 </Card>
		</ListItem>);
            }}
          />
		  </Body>
        </Content>
	  </Content>
      </Container>
    );
  }
}

