import * as React from 'react';
import { View } from 'react-native';
import {Button,Text} from 'react-native-paper';


function HomeScreen({ navigation }) {
    return (
        <View >
            <Text>Home</Text>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
};

export default HomeScreen;