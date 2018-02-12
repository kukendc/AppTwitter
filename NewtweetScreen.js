import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
  
} from 'react-native';

const MenuButton = (props) =>(
  <TouchableOpacity onPress = {() =>{props.navigation.navigate('DrawerOpen')}}>
    <Image 
      source={require('../imgs/Burger1x.png')}
      style={{marginLeft:10}}
    />
  </TouchableOpacity>
)

export default class NewtweetScreen extends Component {
  constructor(props){
    super(props);
    this.state ={data:[
      {text:"hello",}
    ]};
    this.TextList=[];
  }
  handleChangeText = (typedText) =>{
    this.setState({data: typedText});
    if(this.state.data.length  >= 10){
      this.TextList.push(this.state.data);
      this.setState({data:''});
      
    }
  }
  viewTextList() {
    return this.state.data.map((mydata) => {
          return (
            <View ><Text>{mydata.text}</Text></View>
          )
        })
    }
    Submit(){
      this.viewTextList()
    }

    static navigationOptions = ({ navigation }) => ({
      title: 'Newtweet',
      headerLeft: <MenuButton  navigation={navigation} />,
      headerBackTitle: null,
    });

    
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view}>
          {this.viewTextList()}
        </View>

        <View style={styles.textinput}>
          <View style={styles.view}>
            <TextInput
              style={styles.input}
              onChangeText={(value) => this.setState({text: value})}
              value={this.state.text}
              maxLength = {10}
              multiline={true}
              underlineColorAndroid="transparent"
              returnKeyType={'default'}
            />
          </View>

          <View style={{marginRight:7, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={()=>{this.Submit()}}>
              <Image 
                source={require('../imgs/more1x.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={{marginRight:15, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity>
              <Image 
                source={require('../imgs/camera1x.png')}
                style={{marginLeft:10}}
              />
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }, 
  view:{
    flex: 1,
  },
  textinput:{
    flex: 1/13,
    flexDirection:'row',
    backgroundColor: '#00B0FF',
    marginTop: -110
  },
  input:{
    height: 35,
    width: 280,
    borderWidth: 0.5,
    marginLeft: 5,
    marginTop:5,
    backgroundColor: '#fff',
    borderRadius: 5,
  }
  
});