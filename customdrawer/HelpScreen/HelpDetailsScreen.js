import React from "react";
import { AppRegistry, Alert } from "react-native";

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
  View
} from "native-base";

import { StackNavigator } from "react-navigation";


export default class HelpDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={{ fontSize: 12}}>{navigation.state.params.Title}</Title>
        </Body>
		<Right />
      </Header>
    )
  });
  
  componentDidMount() {
    if (this.props.navigation.state.params !== undefined) {
     // Alert.alert("USER found", this.props.navigation.state.params.Title);
    }
  }
  render() {
	  
	const { params } = this.props.navigation.state;
    const itemId = params ? params.ID : null;
    const otherParam = params ? params.Title : null;
	  
    return (
      <Container>
        <Content padder>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
        </Content>
      </Container>
    );
  }
}
