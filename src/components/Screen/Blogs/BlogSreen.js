import * as React from 'react';
import { View, StyleSheet, FlatList, RefreshControl, SafeAreaView } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { withTheme } from 'react-native-paper';
import ScreenBackgroundColor from '../../../utils/ScreenBackground/ScreenBackgroundColor';
import RefreshableFlatList from '../../RefreshableList/RefreshableList';


const DATA = [
    {
        id: '1',
        title: 'First Item',
    },
    {
        id: '2',
        title: 'Second Item',
    },
    {
        id: '3',
        title: 'Third Item',
    },
];

const Item = ({ title }) => {
    console.log(title)
    return (
        <Text>{title.title}</Text>
    );
};

const Blogcreen = ({ theme, ...navProps }) => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <ScreenBackgroundColor >
            <SafeAreaView style={styles.container}>
                <RefreshableFlatList
                    contentContainerStyle={styles.scrollView}
                    data={DATA}
                    renderItem={({ item }) => <Item title={item} />}
                    keyExtractor={item => item.id}
                    onRefresh={onRefresh}
                    refreshing={refreshing}
                >
                </RefreshableFlatList>
            </SafeAreaView>
        </ScreenBackgroundColor>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default withTheme(Blogcreen);