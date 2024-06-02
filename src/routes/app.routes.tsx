import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "@screens/home";
import { History } from "@screens/history";
import { Exercise } from "@screens/exercise";
import { Profile } from "@screens/profile";

type AppRoutes = {
  'home': undefined;
  'history': undefined;
  'profile': undefined;
  'exercise': undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
  return (
    <Navigator 
      screenOptions={{ 
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Screen
        name="home"
        component={Home}
      />
      <Screen
        name="history"
        component={History}
      />
      <Screen
        name="profile"
        component={Profile}
      />
      <Screen
        name="exercise"
        component={Exercise}
      />
    </Navigator>
  )
}