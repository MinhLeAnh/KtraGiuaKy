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
      <View style={styles.group}>
        <Image
          style={styles.carot}
          source={require('./assets/carot.png')}
        />
        <Text style={{fontSize:44,textAlign:'center',margin:5,color:'#fff'}}>Welcome {'\n'}to our store</Text>
        <Text style={{fontSize:14,marginBottom:30,color:'#FCFCFC',opacity: 0.7}}>Get your gloceries in as fast as one hour</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
          <Text style={{fontSize:18,color:'#fff'}}>Get started</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  )
}

function SignInScreen ({ navigation }) {
  return(
    <View style={styles.container}>
      <View style={styles.background2}>
      <ImageBackground
        source={require('./assets/background2.jpg')} 
        style={styles.background}
      ></ImageBackground>
      </View>
    <View style={styles.box1}>
      <Text style={{fontSize:24,textAlign:'left',margin:5}}>Get your groceries with nectar</Text>
    </View>
    
    <View style={styles.box2}>    
      <Image
          style={[styles.logo]}
          source={require('./assets/logo.png')}
      />
        <Text style={{fontSize:18}}>+880</Text>
        
    </View>

    <View style={styles.box3}>
    <Text style={{color:828282,marginBottom:20}}>Or connect with social media</Text>
    <TouchableOpacity style={[styles.button,{flexDirection:'row',backgroundColor:'#5383EC',margin:10}]}>
      <Image 
          source={require('./assets/logoGG.png')} 
          style={{width:23,height:24}} 
      />
      <Text style={{color:'#fff',marginHorizontal:46}}>Continue with Google</Text>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.button,{flexDirection:'row',backgroundColor:'#4A66AC',margin:10}]}>
        <Image 
            source={require('./assets/logoFB.png')} 
            style={{width:11,height:24}}
        />
        <Text style={{color:'#fff',marginHorizontal:40}}>Continue with Facebook</Text>
    </TouchableOpacity>
    </View>
  </View>
  )

}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#fff',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover', // Đảm bảo hình ảnh nền bao phủ toàn bộ màn hình
    width:'100%',
  },
  
  carot:{
    margin:10,
  },
  button: {
    width:340,
    height:67,
    //flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#53B175',
    padding: 10,
    borderRadius: 15,
    justifyContent:'center',
},
logo: {
    width: 40,
    height: 30,
    marginRight: 10,
    borderRadius:4,
},
buttonText: {
    color: 'white',
    fontSize: 16,
},
group:{
  position:'absolute',
  bottom:80,
  alignItems: 'center',
  justifyContent: 'center',
},
background2:{
  height:374,
  resizeMode: 'cover', // Đảm bảo hình ảnh nền bao phủ toàn bộ màn hình
  width:'100%',
},
box1:{
  height:73,
  width:222,
  position:'absolute',
  left:25,
  top:403,
},
box2:{
  flexDirection:'row',
  position:'absolute',
  left:25,
  top:490,
  borderBottomWidth:1,
  width:'85%',
  paddingVertical:10,
  borderBottomColor:'#E2E2E2'
},
box3:{
  position:'absolute',
  top:567,
  justifyContent:'center',
  alignItems:'center',
},
  
});

export default App;