import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register  from "../Register";
import Entities from "../Entities";
import Lines from "../Lines";
import Place from "../Place";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Entities" component={Entities} options={{ title: 'Entidades', headerShown: true}} /> 
            <Stack.Screen name="Lines" component={Lines} options={{ title: 'Filas', headerShown: true}} /> 
            <Stack.Screen name="Place" component={Place} options={{ title: 'Turnos', headerShown: true}} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;