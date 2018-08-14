// Import the libraries

import React from 'react';
import {View, AppRegistry} from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

// Create a component
const App = () => (
    <View style={{flex: 1}}>
        <Header headerText={'Albums'}/>
        <AlbumList/>
    </View>
);

export default App;
// Render it to device.
// In react native () => is a federal function
AppRegistry.registerComponent('albums', () => App);

