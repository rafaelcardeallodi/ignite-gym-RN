import { createNativeStackNavigator, NativeStackNavigationProp} from "@react-navigation/native-stack"

import { SignIn } from "@screens/sign-in"
import { SignUp } from "@screens/sign-up"

type AuthRoutes = {
  'sign-in': undefined;
  'sign-up': undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="sign-in" screenOptions={{ headerShown: false }}>
      <Screen
        name="sign-in"
        component={SignIn}
      />
      <Screen
        name="sign-up"
        component={SignUp}
      />
    </Navigator>
  )
}