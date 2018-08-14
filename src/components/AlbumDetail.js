import React from 'react';
import {Text, View, Image} from 'react-native';
import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail = ({data}) => {

    const {thumbnail_image, title, artist} = data;

    const {cardSectionStyle, headerSectionStyle, thumbnailStyle, headerTextStyle, imageStyle} = styles;

    return (
        <Card>
            <CardSection style={cardSectionStyle}>
                <View>
                    <Image style={thumbnailStyle}
                           source={{uri: 'https://www.edamam.com/web-img/22c/22c27bdc6b8dc67215c7478cb4e5dc42.jpg'}}/>
                </View>
                <View style={headerSectionStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle}
                       source={{uri: 'https://www.edamam.com/web-img/22c/22c27bdc6b8dc67215c7478cb4e5dc42.jpg'}}/>
            </CardSection>
        </Card>
    );
};

const styles = {
    cardSectionStyle: {
        flexDirection: 'row'
    },
    headerSectionStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 60,
        width: 60,
        marginRight: 5,
        borderRadius: 5
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageStyle: {
        width: null,
        height: 300,
        flex: 1,
        borderRadius: 5
    }
};

export default AlbumDetail;