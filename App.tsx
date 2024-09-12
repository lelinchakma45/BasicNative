import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from './Screens/Home';
import { View, Text } from 'react-native';
import SafeAreaWrapper from './Screens/SafeAreaWrapper';

type RootTabParamList = {
  Home: undefined;
  Bookmark: undefined;
  Settings: undefined;
  Profile: undefined;
};

type ScreenProps = {
  route: RouteProp<RootTabParamList, keyof RootTabParamList>;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

function HomeScreen() {
  return (
    <SafeAreaWrapper>
      <Home />
    </SafeAreaWrapper>
  );
}

function BookMarkScreen() {
  return (
    <SafeAreaWrapper>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Bookmark Screen</Text>
      </View>
    </SafeAreaWrapper>
  );
}

function SettingsScreen() {
  return (
    <SafeAreaWrapper>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings Screen</Text>
      </View>
    </SafeAreaWrapper>
  );
}

function ProfileScreen() {
  return (
    <SafeAreaWrapper>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen</Text>
      </View>
    </SafeAreaWrapper>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }: ScreenProps) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: React.ComponentProps<typeof Ionicons>['name'];

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Bookmark':
                iconName = 'bookmark';
                break;
              case 'Settings':
                iconName = 'settings';
                break;
              case 'Profile':
                iconName = 'person';
                break;
              default:
                iconName = 'home';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Bookmark" component={BookMarkScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
