import React, { useEffect } from "react";
import { useState } from "react";
import { FlatList, SafeAreaView, ScrollView, Text } from "react-native";
import NotiItem from "../../components/NotiItem";
import { apiContext } from "../../contexts/api.context";

const Notification = () => {
  const [notiLists, setNotiLists] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let result = await apiContext.getNotifications();
      console.log("result :>> ", result);
      setNotiLists(result.data);
    };
    fetchData().catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView style={{ width: "100%", height: "100%", flex: 1 }}>
      <ScrollView
        style={{ width: "100%", height: "100%" }}
        contentContainerStyle={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          // marginTop: 16,
        }}
      >
        {console.log(notiLists)}
        <FlatList
          data={notiLists}
          renderItem={(item) => {
            return <NotiItem item={item.item} />;
          }}
        />
        {/* {notiLists.map((item) => {
          return <NotiItem props={item} />;
        })} */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;
