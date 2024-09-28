import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import StylesForHomeScreen from "../styles/StylesForHomeScreen.js";
import Setting from "../components/Setting.js";
import SearchIcon from "../components/SearchIcon.js";
import FilterIcon from "../components/FilterIcon.js";
import AddIcon from "../components/AddIcon.js";
import { FlashList } from "@shopify/flash-list";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  const LIST_OF_TASKS = [
    {
      taskID: "13423456",
      nameOfTask: "Read Pet Semetary",
      dueDateOfTask: "Tue, 23 10:00pm",
    },
    {
      taskID: "13423456",
      nameOfTask: "Read Pet Semetary",
      dueDateOfTask: "Tue, 23 10:00pm",
    },
    {
      taskID: "13423456",
      nameOfTask: "Read Pet Semetary",
      dueDateOfTask: "Tue, 23 10:00pm",
    },
    {
      taskID: "13423456",
      nameOfTask: "Read Pet Semetary",
      dueDateOfTask: "Tue, 23 10:00pm",
    },
    {
      taskID: "13423456",
      nameOfTask: "Read Pet Semetary",
      dueDateOfTask: "Tue, 23 10:00pm",
    },
    {
      taskID: "13423456",
      nameOfTask: "Read Pet Semetary",
      dueDateOfTask: "Tue, 23 10:00pm",
    },
    {
      taskID: "13423456",
      nameOfTask: "Read Pet Semetary",
      dueDateOfTask: "Tue, 23 10:00pm",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={StylesForHomeScreen.viewForTask}>
        <Text style={StylesForHomeScreen.taskText}>{item.nameOfTask}</Text>
        <Text>
          <Text style={StylesForHomeScreen.textOfDueHeading}>Due: </Text>
          <Text>{item.dueDateOfTask}</Text>
        </Text>
      </View>
    );
  };

  const onPressOfAddTask = () => {
    console.log("pressed");
    router.push("/AddNewTaskScreen/AddNewTaskScreen");
  };

  return (
    <View style={StylesForHomeScreen.container}>
      <View style={StylesForHomeScreen.viewForSettingIcon}>
        <Setting width={30} height={30} />
      </View>
      <Text style={StylesForHomeScreen.taskTextHeading}>Tasks</Text>
      {/* search bar  */}
      <View style={StylesForHomeScreen.viewForsearch}>
        <View style={StylesForHomeScreen.viewForSearchIcon}>
          <SearchIcon stroke={"#2A0800"} />
        </View>
        <TextInput
          style={StylesForHomeScreen.textInput}
          placeholder="Search for task...."
        />
        <View style={StylesForHomeScreen.viewForFilterIcon}>
          <FilterIcon />
        </View>
      </View>
      {/* list of tasks */}
      <View style={StylesForHomeScreen.viewForFlashList}>
        <FlashList
          data={LIST_OF_TASKS}
          renderItem={renderItem}
          estimatedItemSize={120}
          showsVerticalScrollIndicator={false}
        />
      </View>
      {/* list for adding buttons */}
      <View style={StylesForHomeScreen.viewForAddTaskPressable}>
        <Pressable
          onPress={onPressOfAddTask}
          style={StylesForHomeScreen.pressableForAddingTask}
        >
          <AddIcon />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
