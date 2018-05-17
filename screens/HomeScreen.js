import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ImageBackground
} from 'react-native';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getReply } from '../store/chat/chat.actions'

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {text: ''};
  }

  replyFromYupi() {
    this.props.getReply(this.state.text)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/img/background.jpg')} style={styles.backgroundImage}>
          <View style={{alignItems:'center', width:'100%'}}>
            <Text style={styles.both}>
              {JSON.stringify(this.props.data)}
            </Text>
          </View>
          <View style={{alignItems:'center',marginTop:100}}>
            <Image source={require('../assets/img/1.standby.png')} style={{justifyContent:'center',width: 250, height: 250}}/>
          </View>
          <View style={{alignItems:'center',marginTop:30}}>
            <Text style={styles.user}>
              {this.state.text}
            </Text>
          </View>
          <View style={styles.instructions}>
            <TextInput
              placeholder="What you think?"
              placeholderTextColor="grey"
              onChangeText={(text) => this.setState({text})}
              style={{height: 40, borderColor: 'gray', borderWidth: 1,width:'80%'}}
            />
            <View style={{width:'20%'}}>
              <Button
                onPress={()=>this.replyFromYupi()}
                title="send"
                />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
       flex: 1,
       width: null,
       height: null
   },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    position: 'absolute',
    flexDirection: 'row',
    left: 0,
    right: 0,
    bottom: 0
  },
  user: {
    margin:5,
    padding:10,
    borderRadius:3,
    color: 'white',
    backgroundColor:'#0a0'
  },
  both: {
    margin:5,
    padding:10,
    width:'80%',
    borderRadius:3,
    color: 'grey',
    backgroundColor:'white'
  }
});

const mapStateToProps = (state) => ({
  data: state.data.data,
  loading: state.data.loading,
  error: state.data.error
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getReply,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);