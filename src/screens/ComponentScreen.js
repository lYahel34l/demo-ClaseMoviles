import React from "react";
import { View, Text, TouchableOpacity } from "react-native-web";

const ComponentScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Hi, You Are in Component Screen</Text>


        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Go to Home</Text>
        </TouchableOpacity>

        <hr/>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Go to Back</Text>
        </TouchableOpacity>

        <hr/>
        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <Text>Go to Back to first screen in stack</Text>
        </TouchableOpacity>
    
        </View>
      );
    }


export default ComponentScreen;