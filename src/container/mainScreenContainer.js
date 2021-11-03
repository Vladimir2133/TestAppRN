import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";

const url =
  "https://api.unsplash.com/photos?query=cars&client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043&page=";

export const MainScreenContainer = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(url + page);
    const result = await response.json();
    setData(data.concat(result));
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    getData();
  };
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.photoCard} key={item.id}>
          <Image source={{ uri: item.urls.small }} style={styles.photo} />
          <Text style={styles.text}>{item.user.name}</Text>
        </View>
      )}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={1}
      removeClippedSubviews={true}
      keyExtractor={(item) => item.index}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212120",
  },
  photoCard: {
    flex: 1,
    margin: 10,
    paddingBottom: 15,
    shadowColor: "#000",
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    elevation: 8,
    backgroundColor: "#575957",
    borderRadius: 10,
    alignItems: "center",
  },
  photo: {
    width: "100%",
    height: 170,
  },
  text: {
    fontSize: 18,
    paddingTop: 5,
    color: "#fff",
    opacity: 0.8,
  },
});
