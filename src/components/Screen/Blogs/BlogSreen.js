import * as React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { withTheme } from 'react-native-paper';
import ScreenBackgroundColor from '../../../utils/ScreenBackground/ScreenBackgroundColor';

const Blogcreen = ({ theme, ...navProps }) => {
    const { state, navigation } = navProps;

    return (
        <ScreenBackgroundColor>
            <View>
                <Button mode='contained' onPress={navigation.goBack}> Blog </Button>
                <Text style={{ fontSize: 50 }}>Hello Vlogger </Text>
            </View>
        </ScreenBackgroundColor>
    );
};

export default withTheme(Blogcreen);