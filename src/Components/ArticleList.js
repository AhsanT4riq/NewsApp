import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Container, Content } from "native-base";
import { Article } from "./Article";

export default class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null
    };
  }
  componentDidMount() {
    this.getNews();
  }
  getNews = () => {
    return fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=882ab71efef14e809e9f602e098bd3a9"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ articles: responseJson.articles });
      })
      .catch(error => {
        console.error(error);
      });
  };
  renderArticles = () => {
    return this.state.articles.map((article, index) => {
      return <Article key={index} article={article} />;
    });
  };

  render() {
    return (
      <Container style={styles.container}>
        {this.state.articles ? (
          <Content>{this.renderArticles()}</Content>
        ) : (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {/* <Text style={{ backgroundColor: "red" }}>Your Text</Text> */}
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
