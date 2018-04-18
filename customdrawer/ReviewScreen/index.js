import React, { Component} from 'react';
import { Container, Header, View, Button, Icon, Fab,Body,Left,Right,Title,Content} from 'native-base';
import ReviewList from "./ReviewList";
import { Platform,StyleSheet,TouchableOpacity,Image} from 'react-native';

export default class ReviewsScreenRouter extends Component {
 
 constructor(props) {
    super(props);
	this.state = {active: 'false'};
 }
 
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
            <Title>Reviews</Title>
          </Body>
          <Right />
        </Header>
		<Content>
		<View style={styles.MainContainer}>
 
        <ReviewList/>

        <TouchableOpacity activeOpacity={0.5}  style={styles.TouchableOpacityStyle} >
 
          <Image source={{uri : 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png'}} 
          
          style={styles.FloatingButtonStyle} />
       
        </TouchableOpacity>

		</View>
	
		</Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

 MainContainer :{
   justifyContent: 'center',
   flex:1,
 },
 TouchableOpacityStyle:{
  
     position: 'absolute',
     width: 50,
     height: 50,
     alignItems: 'center',
     justifyContent: 'center',
     right: 30,
     bottom: 30,
   },
  
   FloatingButtonStyle: {
	resizeMode: 'contain',
     width: 50,
     height: 50,
	}
});

