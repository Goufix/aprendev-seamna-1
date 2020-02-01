import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { Login } from "./pages/Login";
import { Main } from "./pages/Main";

export const Routes = createAppContainer(
  createStackNavigator(
    {
      Login: {
        screen: Login,
        navigationOptions: {
          title: "Login"
        }
      },
      Main: {
        screen: Main,
        navigationOptions: {
          title: "Usuário Logado!"
        }
      }
    },

    {
      defaultNavigationOptions: {
        headerShown: false,
        headerTintColor: "#f5f5f5",
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: "#f5f5f5"
        }
      }
    }
  )
);
