import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Container } from "../../component/container";
import { Editstyles as styles } from "./styles";
import { Textinput } from "../../shared/textinput";
import { BASE_URL } from "../../common/constant";

export function Edit({ navigation, route }) {
  const { title, description, id } = route.params;
  const [newTitle, setTitle] = useState(title);
  const [newDescription, setDesription] = useState(description);

  const handleEdit = () => {
    const data = {
      title: newTitle,
      description: newDescription,
    };

    fetch(`${BASE_URL}/${id}`, { method: "PUT", data })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        if (res.status === "success") {
          navigation.navigate("event");
          return;
        }
      })
      .catch((err) => err);
  };

  return (
    <>
      <Container>
        <Textinput onChange={setTitle} value={newTitle} />
        <Textinput onChange={setDesription} value={newDescription} />
        <TouchableOpacity style={styles.edit} onPress={handleEdit}>
          <Text>Submit Editting</Text>
        </TouchableOpacity>
      </Container>
    </>
  );
}
