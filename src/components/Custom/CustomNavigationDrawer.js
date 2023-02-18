import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Drawer, Button } from "react-native-paper";
import { withTheme } from "react-native-paper";

const CustomNavigationDrawer = ({ theme, ...navProps }) => {
    const { state, navigation } = navProps;
    const isActive = index => index === state.index;

    const scrollViewStyle = {
        backgroundColor: theme.colors.background
    };
    return (
        <DrawerContentScrollView style={scrollViewStyle} {...navProps}>
            {state.routes && state.routes.length > 0 && state.routes.map((route, index) => (
                <Drawer.Item
                    key={route.key}
                    label={route.name}
                    active={isActive(index)}
                    accessibilityLabel={route.name}
                    onPress={() => navigation.navigate(route.name)}
                />
            ))}
        </DrawerContentScrollView>
    );s
}

export default withTheme(CustomNavigationDrawer);

