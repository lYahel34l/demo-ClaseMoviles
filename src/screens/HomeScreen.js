import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";


function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Hi, You Are in Home Screen</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <Text>Go to Details</Text>
        </TouchableOpacity>

        <hr></hr>
        <TouchableOpacity onPress={() => navigation.navigate('Component')}>
          <Text>Go to Component</Text>
        </TouchableOpacity>
      </View>
    );
  }

export default HomeScreen;