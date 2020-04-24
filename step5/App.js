import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MapScreen from "./src/screens/mapScreen";
import HomeScreen from "./src/screens/HomeScreen";
import WorldInfoScreen from "./src/screens/WorldInfoScreen";
import InfoScreen from "./src/screens/CountriesInfoScreen";

const navigator = createStackNavigator(
    {

        Countries: InfoScreen,
        Home: HomeScreen,
        Map: MapScreen,
        World:WorldInfoScreen,
    },
    {
        initialRouteName: "Home",
    }
);

export default createAppContainer(navigator);
