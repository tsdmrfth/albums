import React from 'react';
import {Text, View} from 'react-native';
import Card from './Card'

const AlbumDetail = (props) => {
    return (
        <Card>
            <Text>{props.datam.title}</Text>
        </Card>
    );
};

export default AlbumDetail;