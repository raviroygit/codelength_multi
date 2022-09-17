import React from "react";
import { Appbar } from "react-native-paper";

const AppBar = ({ navigation, options, back }) => {

    return (
        <>
            <Appbar.Header>
                <Appbar.Action
                    accessibilityLabel="Menu"
                    icon="menu"
                    onPress={navigation.toggleDrawer}
                />
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