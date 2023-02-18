import React from "react";
import { Appbar } from "react-native-paper";
import { large, useBreakpoint } from '../../utils/Drawer/Breakpoint';

const showDrawerToggleForBreakpoint = breakpoint => breakpoint !== large;

const AppBar = ({ navigation, options, back }) => {
    const breakpoint = useBreakpoint();
    const showDrawerToggle = showDrawerToggleForBreakpoint(breakpoint);

    return (
        <>
            <Appbar.Header>
                {/* <Appbar.Action
                    accessibilityLabel="Menu"
                    icon="menu"
                    onPress={navigation.toggleDrawer}
                /> */}

                {showDrawerToggle && (
                    <Appbar.Action
                        accessibilityLabel="Menu"
                        icon="menu"
                        onPress={navigation.toggleDrawer}
                    />
                )}

                {back ? <Appbar.BackAction
                    onPress={navigation.goBack}
                    accessibilityLabel="Back"
                /> : null}
                <Appbar.Content title={options.title} />
            </Appbar.Header>
        </>
    );
};

export default AppBar;