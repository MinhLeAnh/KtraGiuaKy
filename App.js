import * as React from 'react';
import { Button, View,Image, Text,StyleSheet,TouchableOpacity,ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function OnboardingScreen ({ navigation }) {
  return(
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/background1.jpg')} // Đường dẫn đến hình ảnh của bạn
        style={styles.background}
      >
      <Image
        style={styles.carot}
        source={require('./assets/carot.jpg')}
      />
      <Text style={{fontSize:48,textAlign:'center',margin:10,color:'#fff'}}>Welcome {'\n'}to our store</Text>
      <Text style={{fontSize:16,marginBottom:30,color:'#fff'}}>Get your gloceries in as fast as one hour</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={{fontSize:18,color:'#fff'}}>Get started</Text>
    </TouchableOpacity>
    
    </ImageBackground>
    </View>
  )

}

function SignInScreen ({ navigation }) {
  return(
      <View style={styles.container}>
    <Text>Get your groceries with nectar</Text>
    <Image
        style={styles.carot}
        source={require('./assets/logo.jpg')}
    />
    <Text>+880</Text>
    <Text>Or connect with social media</Text>
    
    <TouchableOpacity style={styles.button}>
      <Image 
          source={require('./assets/carot.jpg')} 
          style={styles.logo} 
      />
      <Text>Continue with Google</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button}>
        <Image 
            source={require('./assets/carot.jpg')} 
            style={styles.logo} 
        />
        <Text>Continue with Facebook</Text>
    </TouchableOpacity>
  </View>
  )

}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover', // Đảm bảo hình ảnh nền bao phủ toàn bộ màn hình
  },
  
  carot:{
    margin:10,
  },
  button: {
    width:357,
    height:67,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#53B175',
    padding: 10,
    borderRadius: 15,
    justifyContent:'center'
},
logo: {
    width: 20,
    height: 20,
    marginRight: 10,
},
buttonText: {
    color: 'white',
    fontSize: 16,
},
  
});

export default App;