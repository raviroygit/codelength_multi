import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomAppBar from '../../Custom/CustomHeader';
import Homescreen from './Homescreen';

const Stack = createNativeStackNavigator();


const HomescreenHeader=({ navigation }) =>{
    return (
        <Stack.Navigator
            screenOptions={{
                header: props => <CustomAppBar {...props} />
            }}
        >
            <Stack.Screen name="HomescreenDetails" component={Homescreen} options={{ title: 'Home' }} />

        </Stack.Navigator>
    );
};



export default HomescreenHeader;