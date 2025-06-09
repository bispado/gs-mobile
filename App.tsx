import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Feather } from "@expo/vector-icons"

import LoginScreen from "./src/screens/LoginScreen"
import HomeScreen from "./src/screens/HomeScreen"
import ShelterDetailScreen from "./src/screens/ShelterDetailScreen"
import DonationsScreen from "./src/screens/DonationsScreen"
import MapScreen from "./src/screens/MapScreen"
import ProfileScreen from "./src/screens/ProfileScreen"
import { colors } from "./src/styles/colors"
import MyShelttersScreen from "./src/screens/MyShelttersScreen"
import CreateEditShelterScreen from "./src/screens/CreateEditShelterScreen"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Feather.glyphMap

          if (route.name === "Home") {
            iconName = "home"
          } else if (route.name === "Map") {
            iconName = "map"
          } else if (route.name === "Donations") {
            iconName = "heart"
          } else if (route.name === "Profile") {
            iconName = "user"
          } else {
            iconName = "home"
          }

          return <Feather name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text.secondary,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Donations" component={DonationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Main" component={TabNavigator} />
          <Stack.Screen name="ShelterDetail" component={ShelterDetailScreen} />
          <Stack.Screen name="MyShelters" component={MyShelttersScreen} />
          <Stack.Screen name="CreateEditShelter" component={CreateEditShelterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
