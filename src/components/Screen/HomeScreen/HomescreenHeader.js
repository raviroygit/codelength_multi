import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomAppBar from '../../Custom/CustomHeader';
import Homescreen from './Homescreen';


const Stack = createNativeStackNavigator();


function HomescreenHeader({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                header: props => <CustomAppBar {...props} />
            }}
        >
            <Stack.Screen name="HomescreenDetails" component={Homescreen} options={{ title: 'Homescreen' }} />
        </Stack.Navigator>
    );
};



export default HomescreenHeader;