import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomescreenHeader from '../Screen/HomeScreen/HomescreenHeader';
import CustomNavigationDrawer from '../Custom/CustomNavigationDrawer';
import BlogHeader from '../Screen/Blogs/BlogHeader';
import { large,useBreakpoint } from '../../utils/Drawer/Breakpoint';

const Drawer = createDrawerNavigator();

const NavigationContent = () => {
    const getDrawerTypeForBreakpoint = breakpoint =>
    breakpoint === large ? 'permanent' : 'back';

    const breakpoint = useBreakpoint();// called custom hooks for change imediatly when screen wisth changes
    const drawerTypeForBreakpoint = getDrawerTypeForBreakpoint(breakpoint);

    return (
        <Drawer.Navigator
            screenOptions={{
                // drawerStyle: {
                //   backgroundColor: "white",
                //   zIndex: 100,
                // },
                // drawerPosition: "right",
                drawerType:drawerTypeForBreakpoint
            }}
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