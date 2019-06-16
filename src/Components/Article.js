import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";
import moment from "moment";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Row
} from "native-base";

export const Article = props => {
  return (
    <Card>
      <CardItem>
        <Body>
          <Text style={styles.header}>{[props.article.source.name]}</Text>
          <Text note>News</Text>
        </Body>
      </CardItem>
      <CardItem cardBody>
        <Image
          source={{ uri: props.article.urlToImage }}
          style={{ height: 200, width: null, flex: 1 }}
        />
        <View style={styles.imageOverlay}>
          <Text style={styles.overlayText}>{props.article.title}</Text>
        </View>
      </CardItem>
      <CardItem>
        <Body>
          <Text style={styles.content}>{props.article.content}</Text>
        </Body>
      </CardItem>
      <CardItem>
        <Body style={styles.author}>
          <Text style={styles.authorText}>
            by {props.article.author} on{" "}
            {moment(props.article.publishedAt).format(
              "MMMM Do YYYY, h:mm:ss a"
            )}
          </Text>
        </Body>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold"
  },
  content: {
    fontSize: 13
  },
  author: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  authorText: {
    fontSize: 10
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end"
  },
  overlayText: {
    color: "black",
    fontWeight: "bold",
    backgroundColor: "lightgray",
    opacity: 0.75
  }
});
