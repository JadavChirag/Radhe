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

import Row from './Row';

class ListViewDemo extends React.Component {
    /*
     * Removed for brevity
     */
    render() {
        return (
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={(data) => <Row {...data} />}
            />
        );
    }
}

export default ListViewDemo;