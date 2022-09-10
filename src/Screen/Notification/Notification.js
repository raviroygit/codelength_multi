import * as React from 'react';
import { Button, View } from 'react-native';

function NotificationsScreen({ navigation, goBack }) {
    console.log("navigation", navigation)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.canGoBack() && navigation.goBack()} title="Go back home" />
        </View>
    );
};

export default NotificationsScreen;