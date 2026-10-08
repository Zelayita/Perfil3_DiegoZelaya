import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CharactersScreen } from '../screens/CharactersScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { colors } from '../theme';

const Stack = createNativeStackNavigator();

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.cream,
    card: colors.orange,
    primary: colors.charcoal,
    text: colors.white,
    border: colors.orangeDark,
  },
};

export function AppNavigator() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{
          animation: 'slide_from_right',
          contentStyle: { backgroundColor: colors.cream },
          headerBackButtonDisplayMode: 'minimal',
          headerStyle: { backgroundColor: colors.orange },
          headerTintColor: colors.white,
          headerTitleStyle: { fontWeight: '900' },
        }}
      >
        <Stack.Screen
          component={ProfileScreen}
          name="Profile"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={CharactersScreen}
          name="Characters"
          options={{ title: 'Rick and Morty' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
