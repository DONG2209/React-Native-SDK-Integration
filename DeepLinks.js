
import React, { Component } from 'react';
import {
    View,
    TextInput,
    Button,
    Text,
    Image
} from 'react-native';
import Utils from "./Utils";

export default class DeepLinks extends Component {

  constructor(props) {
    super(props)

    this.deeplink = props.deeplink;
    this.passthrough = props.passthrough;
    this.isDeferred =  props.isDeferred ? "Yes" : "No";
    this.urlParameters = props.urlParameters;
  }

  render() {
    return (
        <>
          <View style={Utils.styles.viewContainer}>
            <Image source={require('./singular_full_logo.png')}
            style={Utils.styles.image}
            />
            <TextInput
                style={Utils.styles.deeplinkTextContainer}
                value="Deeplink"
            />
            <TextInput
                style={Utils.styles.deeplinkContainer}
                value={this.deeplink}
                defaultValue="App did not open with a deep link"
            />

            <TextInput
                style={Utils.styles.deeplinkTextContainer}
                value="Passthrough"
            />
            <TextInput
                style={Utils.styles.deeplinkContainer}
                value={this.passthrough}
                defaultValue="App did not open with a deep link"
            />

            <TextInput
                style={Utils.styles.deeplinkTextContainer}
                value="Is Deferred"
            />
            <TextInput
                style={Utils.styles.deeplinkContainer}
                value={this.isDeferred}
                defaultValue="App did not open with a deep link"
            />

            <TextInput
                style={Utils.styles.deeplinkTextContainer}
                value="url parameters"
            />
            <TextInput
                style={Utils.styles.deeplinkContainer}
                value={this.urlParameters}
                defaultValue="empty"
            />

          </View>
        </>
    );
  };
}
