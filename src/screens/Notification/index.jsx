import React from "react";
import { SafeAreaView, Text } from "react-native";
import NotiItem from "../../components/NotiItem";

const Notification = () => {
  return (
    <SafeAreaView>
      <NotiItem />
      <NotiItem />
      <NotiItem />
      <NotiItem />
    </SafeAreaView>
  );
};

export default Notification;
