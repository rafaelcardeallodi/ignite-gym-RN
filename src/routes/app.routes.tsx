import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
  return (
    <Navigator>
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