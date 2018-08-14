import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({whenClicked, children}) => {
    const {buttonStyle, textStyle} = styles;
    return (
        <TouchableOpacity onPress={whenClicked} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: '#007aff',
        borderWidth: 1,
        margin: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default Button;