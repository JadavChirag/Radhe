/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    FlatList
} from 'react-native';

export default class DashboradScreen extends Component<{}> {



    render() {
        return (
            <View style={styles.container}>

                <Image
                    style={{width: 150, height: 150}}
                    source={{uri: 'https://i.imgur.com/2Fmp1VA.png'}}
                />

                <FlatList
                    horizontal={true}
                    data={[
                        {key: 'Premuim'},
                        {key: 'Royal'},
                        {key: 'Premuim (Couple)'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />


                <Text style={styles.welcome}>
                    Welcome to Nebula Holiday!
                </Text>
                <Text style={styles.content}>
                    Real Estate | Holidays | Timeshare | Wellness
                </Text>
                <Text style={styles.content}>
                    We are the fastest growing Network marketing company in India.
                </Text>
                <Text style={styles.instructions}>
                    Join the Nebula Family!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    content: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 15,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
