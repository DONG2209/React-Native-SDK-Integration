
import React, { Component } from 'react';
import {
  View,
  TextInput,
  Button,
  Alert,
  Image
} from 'react-native';
import {Singular, SingularConfig} from 'singular-react-native';
import Utils from "./Utils";

export default class Identity extends Component {
  constructor(props) {
    super(props)

    this.state = {
      customUserId: '',
    }
  }

  setCustomUserId() {
    const customUserId = this.state.customUserId;
    if (Utils.isNullOrEmpty(customUserId)) {
      alert("Please enter a valid Custom User Id");
      return;
    }

    // If customUserId is not set using SingularConfig, you can use Singular.setCustomUserId("test@email.com").
    // Once set, the Custom User Id will persist between runs until `Singular.unsetCustomUserId()` is called.
    Singular.setCustomUserId(customUserId);

    Alert.alert("Custom User Id set to:",customUserId);
  }

  unsetCustomUserId() {
    Singular.unsetCustomUserId();
    alert("Custom User Id unset");
  }

  render() {
    return (
        <>
          <View style={Utils.styles.viewContainer}>
            <Image source={require('./singular_full_logo.png')}
                   style={Utils.styles.image}
            />
            <TextInput
                style={Utils.styles.container}
                placeholder="Custom User Id"
                onChangeText={(text) => this.setState({customUserId: text})}
                value={this.state.customUserId}
            />
            <View style={Utils.styles.buttonContainer}>
            <Button
                title="Set Custom User Id"
                onPress={() => this.setCustomUserId()}
            />
            </View>
            <View style={Utils.styles.buttonContainer}>
            <Button
                title="Unset Custom User Id"
                onPress={() => this.unsetCustomUserId()}
            />
            </View>
          </View>
        </>
    );
  };
}
