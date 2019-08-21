import { createStackNavigator } from "react-navigation";
import Search from "../screen/Search";

export default createStackNavigator(
  {
    Search: {
      screen: Search
    }
  },
  {
    mode: "card"
  }
);
