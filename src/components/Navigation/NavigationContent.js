import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomescreenHeader from '../Screen/HomeScreen/HomescreenHeader';
import CustomNavigationDrawer from '../Custom/CustomNavigationDrawer';

const Drawer = createDrawerNavigator();

const NavigationContent = () => {

    return (
        <Drawer.Navigator
            // screenOptions={{
            //     // drawerStyle: {
            //     //   backgroundColor: "white",
            //     //   zIndex: 100,
            //     // },
            //     // drawerPosition: "right",
            // }}
            initialRouteName="Hello"
            drawerContent={props => <CustomNavigationDrawer {...props} />}
        >
            <Drawer.Screen
                options={{ headerShown: false }}
                name="Home" component={HomescreenHeader} />
        </Drawer.Navigator>
    );
}

export default NavigationContent;