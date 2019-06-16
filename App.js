/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

// Components
import { HeaderTitle } from "./src/Components/Header";
import ArticleList from "./src/Components/ArticleList";
import { Article } from "./src/Components/Article";

export default class App extends Component {
  render() {
    return (
      <View style={{ height: "100%" }}>
        <HeaderTitle name="News App" />
        <ArticleList />
      </View>
    );
  }
}
