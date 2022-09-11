import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Drawer}  from "react-native-paper"

const CustomNavigationDrawer = ({theme,...navProps}) => {
    const {state,navigation}= navProps;
    const isActive = index => index === state.index;

    return (
        <DrawerContentScrollView {...navProps}>
            {state.routes && state.routes.length>0 && state.routes.map((route,index)=>(
                <Drawer.Item
                key={route.key}
                label={route.name}
                active={isActive(index)}
                accessibilityLabel={route.name}
                onPress={()=> navigation.navigate(route.name)}
                />
            ))}
        </DrawerContentScrollView>
    );
}
  
export default CustomNavigationDrawer;

