import * as React from 'react';
import { Button, View } from 'react-native';
import { Text } from 'react-native-paper';

function NotificationsScreen({ navigation, goBack }) {
    console.log("navigation", navigation)

    return (
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //     <Button onPress={() => navigation.canGoBack() && navigation.goBack()} title="Go back home" />
        // </View>
        <>
        <Text>Hello Notification</Text>
        </>
    );
};

export default NotificationsScreen;