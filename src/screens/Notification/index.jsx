import React, { useEffect } from "react";
import { useState } from "react";
import { SafeAreaView, Text } from "react-native";
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
    <SafeAreaView>
      {notiLists.map((item) => {
        return <NotiItem props={item} />;
      })}
    </SafeAreaView>
  );
};

export default Notification;
