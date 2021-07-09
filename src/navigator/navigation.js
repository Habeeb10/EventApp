import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Event } from "../screens/event/Event";
import { NewEvent } from "../screens/newEvent/NewEvent";
import { Edit } from "../screens/edit/edit";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="event" component={Event} />
        <Stack.Screen name="newevent" component={NewEvent} />
        <Stack.Screen name="edit" component={Edit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
