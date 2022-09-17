import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomescreenHeader from '../Screen/HomeScreen/HomescreenHeader';
import CustomNavigationDrawer from '../Custom/CustomNavigationDrawer';
import BlogHeader from '../Screen/Blogs/BlogHeader';


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
            initialRouteName="Home"
            drawerContent={props => <CustomNavigationDrawer {...props} />}
        >
            <Drawer.Screen
                options={{ headerShown: false }}
                name="Home" component={HomescreenHeader} 
            />
            <Drawer.Screen
                options={{ headerShown: false }}
                name="Blogs" component={BlogHeader} 
            />
        </Drawer.Navigator>
    );
}

export default NavigationContent;