import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomAppBar from '../../Custom/CustomHeader';
import BlogSreen from './BlogSreen';

const Stack = createNativeStackNavigator();


const BlogSreenHeader=({ navigation }) =>{
    
    return (
        <Stack.Navigator
            screenOptions={{
                header: props => <CustomAppBar {...props} />
            }}
        >
            <Stack.Screen name="list" component={BlogSreen} options={{ title: 'Blogs' }} />

        </Stack.Navigator>
    );
};



export default BlogSreenHeader;