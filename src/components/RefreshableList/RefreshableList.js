import { FlatList, Platform, StyleSheet, RefreshControl } from 'react-native';
import { Button } from 'react-native-paper';
import LoadingIndicator from './LoadingIndecator';

export const LOADING_INDICATOR = {
    FLATLIST: 'FLATLIST', // intuitive on mobile
    STANDALONE: 'STANDALONE', // for initial loading and loading via button on web
};

export default function RefreshableFlatList({
    refreshing,
    onRefresh,
    ...props
}) {

    // onRefresh is a funtions that call api of list 

    const refreshFromList = () => onRefresh();
    //   const refreshFromButton = () => onRefresh();

    const showReloadButton =
        Platform.OS === 'web' || process.env.NODE_ENV === 'test';

    return (
        <>
            {showReloadButton && (
                <>
                    <Button
                        mode="outlined"
                        style={styles.refreshButton}
                        onPress={onRefresh}
                    >
                        Reload
                    </Button>
                    {refreshing && (
                        <LoadingIndicator />
                    )}
                </>
            )}

            <FlatList
                {...props}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
        </>
    );
}

const styles = StyleSheet.create({
    refreshButton: {
        margin: 15,
    },
});