import * as React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { withTheme } from 'react-native-paper';
import ScreenBackgroundColor from '../../../utils/ScreenBackground/ScreenBackgroundColor';

const Homescreen = ({theme}) => {

    return (
        <ScreenBackgroundColor>
        <View >
            <Button mode='contained'> Hello paper </Button>
            <Text style={{fontSize:50}}>Hello Details Container </Text>
        </View>
        </ScreenBackgroundColor>
    );
};

export default withTheme(Homescreen);