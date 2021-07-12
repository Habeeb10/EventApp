import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { BASE_URL } from "../../common/constant";
import { Container } from "../../component/container";
import { Button } from "../../shared/button";
import { Input } from "../../shared/Input";
import { NewEventstyles as styles } from "./utils/styles";

export function NewEvent({ navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDesription] = useState("");
  const [loading, setLoading] = useState(false);

  const Submit = () => {
    if (!title && !description) {
      return Alert.alert("Error", "Enter your details");
    }
    const data = {
      title,
      description,
    };
    setLoading(true);

    fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.status === "success") {
          return navigation.navigate("event");
        }
      })
      .finally(() => setLoading(false));
  };
  return (
    <>
      <Container>
        <View style={styles.header}>
          <Text style={styles.create}>Create New Event</Text>
        </View>

        <Input placeHolder="title" onChange={setTitle} value={title} />

        <Input
          placeHolder="description"
          onChange={setDesription}
          value={description}
        />

        <Button
          title="Submit"
          style={styles.button}
          onPress={Submit}
          loading={loading}
        />
      </Container>
    </>
  );
}
