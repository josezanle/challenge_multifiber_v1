import { createStackNavigator } from '@react-navigation/stack';

import DrawerNavigattor from './Drawer';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DrawerNavigattor" component={DrawerNavigattor} />
        </Stack.Navigator>
    );
}

export default HomeStack