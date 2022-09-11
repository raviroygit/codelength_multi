import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../Screen/HomeScreen/HomeScreen';
import NotificationsScreen from '../../Screen/Notification/Notification';
import CustomNavigationDrawer from './CustomNavigationDrawer';

const Drawer = createDrawerNavigator();


const NavigationContent = () => {
    return (

        <Drawer.Navigator
            // screenOptions={{
            //     headerShow: true
            // }}

            initialRouteName="Home"
            drawerContent={props=> <CustomNavigationDrawer {...props}/>}
        >
            <Drawer.Screen
             name="Home" component={HomeScreen} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            

        </Drawer.Navigator>
    );
}

export default NavigationContent;