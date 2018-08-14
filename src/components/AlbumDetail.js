import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ({data}) => {

    const {thumbnail_image, title, artist, url} = data;

    const {cardSectionStyle, headerSectionStyle, thumbnailStyle, headerTextStyle, imageStyle} = styles;

    return (
        <Card>

            <CardSection style={cardSectionStyle}>
                <View>
                    <Image style={thumbnailStyle}
                           source={{uri: thumbnail_image}}/>
                </View>
                <View style={headerSectionStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={imageStyle}
                       source={{uri: thumbnail_image}}/>
            </CardSection>

            <CardSection>
                <Button whenClicked={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
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