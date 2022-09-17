import * as React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { withTheme } from 'react-native-paper';

const Homescreen = ({theme}) => {
    const scrollViewStyle = {
        backgroundColor: theme.colors.background
    }
    return (
        <View {...scrollViewStyle}>
            <Button mode='contained'> Hello paper </Button>
            <Text style={{fontSize:50}}>Hello Details Container </Text>
        </View>
    );
};

export default withTheme(Homescreen);