import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text,Left,Body,Thumbnail,Card,CardItem,Button,Title,Right,Icon} from 'native-base';
import {Image} from "react-native";

const items = [{ID:1,Title:'The purchase entitles the customer to a 4nights/5days land only holiday package to Thailand.'},
			 {ID:2,Title:'For the detailed inclusions and project highlights kindly refer our brochure our company website.'},
			 {ID:2,Title:'1. Passport requirement:- The passport should be valid for minimum 06 months from the date of arrival.'},
			 {ID:2,Title:'2. As of now we are not holding any service, all services will be subject to re-confirmation on the date of booking.'},
			 {ID:2,Title:'3. The 4N/5D Thailand holiday package is redeemable in any of the below season.\r\n • Season 1 - from 1st Sep, 2017 to 15th Dec, 2017\r\n • Season 2 - from 15th Jan, 2018 to 30th Apr, 2018'},
			 {ID:2,Title:'4. Free look period shall be of 7 days. The customer can within 7 days from the date of purchase intimate in writing to the company stating their wish to cancel the purchase, the same shall entitle them for full refund. By selecting the date of travel/check in the customer, unconditionally, waives his right attached to the free look period policy irrespective of the days of purchase.'},
			 {ID:2,Title:'5. The customer can change the name of the traveller from the name mentioned in the KYC form one time, at a nominal charge of INR 1000+GST.'},
			 {ID:2,Title:'6. The customer can change the season of travel from the selection made in this KYC, one time, at a nominal charge of INR 3,000+GST'},
			 {ID:2,Title:'7. Once the booking is confirmed for a date as per point 2 above, the customer can change the date of travel, before 15 clear days, between the date of change request and date of check in, at a nominal charge of INR 2500+GST. No changes shall be allowed for a shorter clear days.'},
			 {ID:2,Title:'8. Company follows a strict policy of no show no refund.'},
			 {ID:2,Title:'9. The booking needs to be reconfirmed with the company by e-mail at least 15(clear) days prior to intended date of Check-in.'},
			 {ID:2,Title:'10. The booking will thereafter be re-confirmed by our operations team by e-mail and thereafter client/s will be considered as booked to travel.'},
			 {ID:2,Title:'11. Choice of hotel is not available in “TVP”, mentioned or similar hotel will be provided (kindly check hotel rating and other details on respective website of hotels).'},
			 {ID:2,Title:'12. SIC means Seat-in-Coach basis.A coach may cover 4 to 5 hotels enroute.'},
			 {ID:2,Title:'13. This is a promotional package which is available only for limited seats which cannot be hold and are subject to availability of seats on selected departure dates.'},
			 {ID:2,Title:'14. Package Cost includes(Ground handling charges) Dollar segment, which will be taken out of your BTQ(Basic Travel Quota).'},
			 {ID:2,Title:'15. Room type (Double or twin) is subject to availability and sole discretion of the hotel.'},
			 {ID:2,Title:'16. Hotel Check in time is 2 PM to 4 PM.'},
			 {ID:2,Title:'17. BREAKFAST: Fixed breakfast as per hotel discretion.'},
			 {ID:2,Title:'18. All dinners (wherever included) will be Indian and will be served at specific Indian restaurants.'},
			 {ID:2,Title:'19. Meals are served in a pre - set buffet.'},
			 {ID:2,Title:'20. Schedule advised by Local Representative will be final and the tourist have to strictly adhere to the timings.'},
			 {ID:2,Title:'21. TRANSFERS: Standard bus transport.'},
			 {ID:2,Title:'22. No tour guide/Escort accompanies our groups from India to abroad & back to India.'},
			 {ID:2,Title:'23. Tour is in group & one may have to accommodate to the timings.'},
			 {ID:2,Title:'24. Scheduling & re-scheduling may be done on circumstance prevailing at the time tour operations in best interest of tour group at the dis     cretion of group coordinator. (Destination Management Company)'},
			 {ID:2,Title:'25. Hotels and services quoted are subject to the final Confirmation from Hotels and Suppliers, Else similar property(Hotels) will be used.'},
			 {ID:2,Title:'26. All Tour packages offered by us are governed by the terms and conditions and undertakings in the package tour-service agreement along with the booking form, which are incorporated herein by reference.'},
			 {ID:2,Title:'27. The time schedule fixed by the local tour operator should be strictly adhered to.For any inconvenience, loss or consequence suffered due to tourists failure to keep the local tour operators timings, the tourist alone would be responsible.'},
			 {ID:2,Title:'28. Please also note that unlike in the case of individual tailor made tour packages; you might have to adjust timings for the sake of general member of your tour group.now are only proposed at the moment.The hotel named in the confirmation email shall be final.'},
			 {ID:2,Title:'29. The company shall not be responsible for non-performance in the event civil unrest, riots, natural calamities or in the event of of force-majeure.'},
			 {ID:2,Title:'30. The traveller shall be solely responsible for approval of VISA on arrival in Thailand.'},
			 {ID:2,Title:'31. The company shall not be liable to refund any amount in case the VISA is not granted to a traveller.'},
			 {ID:2,Title:'32. The traveller is suggested to take note of the minimum currency possession(Currently it is 10,000 Baht for and individual and 20,000 Baht per family) and other conditions.'}];
			 

export default class TermsRouterScreen extends Component {
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
            <Title>Terms & Condition</Title>
          </Body>
          <Right />
        </Header>
        <Content>
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
        </Content>
      </Container>
    );
  }
}
