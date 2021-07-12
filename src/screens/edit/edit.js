import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Container } from "../../component/container";
import { Editstyles as styles } from "./styles";
import { Textinput } from "../../shared/textinput";
import { BASE_URL } from "../../common/constant";
import { Button } from "../../shared/button";

export function Edit({ navigation, route }) {
  const { title, description, id } = route.params;
  const [newTitle, setnewTitle] = useState(title);
  const [newDescription, setnewDesription] = useState(description);
  const [loading, setLoading] = useState(false);

  const handleEdit = () => {
    const data = {
      title: newTitle,
      description: newDescription,
      startDate: new Date(),
      endDate: new Date(),
      createdAt: new Date(),
    };
    setLoading(true);
    fetch(`${BASE_URL}/${id}`, { method: "PUT", data })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);

        if (res.status === "success") {
          navigation.navigate("event");
        }
      })
      .catch((err) => err)
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Container>
        <Textinput onChange={setnewTitle} value={newTitle} />
        <Textinput onChange={setnewDesription} value={newDescription} />
        <Button
          onPress={handleEdit}
          title="Submit Editing"
          style={styles.button}
          loading={loading}
        />
      </Container>
    </>
  );
}
