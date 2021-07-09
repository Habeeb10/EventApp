import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { BASE_URL } from "../../common/constant";
import { Container } from "../../component/container";
import { MapCard } from "./utils/card";
import { Eventstyles as styles } from "./utils/styles";

export function Event({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((json) => {
        console.log({ json });
        setData(json.data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleDelete = (id) => {
    setLoading(true);
    fetch(`${BASE_URL}/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((res) => {
        if (res.status === "success") {
          return fetchData();
        }
      })
      .catch((err) => err)
      .finally(() => setLoading(false));
  };

  const _renderItem = ({ item }) => {
    const { title, description, id } = item;
    return (
      <MapCard
        title={title}
        description={description}
        onDelete={() => handleDelete(id)}
        id={id}
      />
    );
  };

  return (
    <>
      {loading ? (
        <View
          style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <Container>
          <View style={styles.header}>
            <Text style={styles.create}>My Event</Text>
            <TouchableOpacity style={styles.touch}>
              <Text
                style={styles.add}
                onPress={() => navigation.navigate("newevent")}
              >
                Add
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            contentContainerStyle={{ paddingHorizontal: 10 }}
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={_renderItem}
          />
        </Container>
      )}
    </>
  );
}
