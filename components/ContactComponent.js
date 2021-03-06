import { Card } from "react-native-elements";
import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { render } from "react-dom";
import * as Animatable from 'react-native-animatable';


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: "Contact Us",
  };

  render() {
    return (
      <ScrollView>
        <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
          <Card wrapperStyle={{ margin: 20 }} title={"Contact Information"}>
            <Text>1 Nucamp Way</Text>
            <Text>Seattle, WA 98001</Text>
            <Text>U.S.A</Text>
            <Text>Phone: 1-206-555-1234</Text>
            <Text>Email: campsites@nucamp.co</Text>
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Contact;
