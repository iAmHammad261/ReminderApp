import {
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  View,
  Pressable,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import StylesForAddNewTask from "../styles/StylesForAddNewTaskScreen";
import CalenderIcon from "../components/CalenderIcon.js";
import ClockIcon from "../components/ClockIcon.js";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import StylesForAddNewTaskScreen from "../styles/StylesForAddNewTaskScreen";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { Chip } from 'react-native-paper';

export default function CreateNewTaskScreen() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const onChangeOfDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const onChangeOfTime = (event, selectedTime) => {
    console.log("executed");
    const currentTime = selectedTime;
    console.log("current time : ", currentTime);
    setTime(currentTime);
  };

  const onPressAndFocusOfInputOfCalenderIcon = () => {
    // console.warn("calender pressed")
    Keyboard.dismiss();
    DateTimePickerAndroid.open({
      value: date,
      onChange: onChangeOfDate,
      mode: "date",
      //   display: 'spinner',
      is24Hour: true,
    });
  };

  const onPressAndFocusOfInputOfClockIcon = () => {
    Keyboard.dismiss();
    DateTimePickerAndroid.open({
      value: time,
      onChange: onChangeOfTime,
      mode: "time",
      //   display: 'spinner',
      is24Hour: true,
    });
  };

  return (
    <View style={StylesForAddNewTask.container}>
      {/* Heading of Task */}
      <View style={StylesForAddNewTask.viewForMainHeading}>
        <Text style={StylesForAddNewTask.mainTextHeading}>New Task</Text>
      </View>

      <KeyboardAvoidingView
        style={StylesForAddNewTask.containerForForm}
        behavior="padding"
        keyboardVerticalOffset={0}
      >
        {/* Form */}
        <View style={StylesForAddNewTask.viewForFormSection}>
          <Text style={StylesForAddNewTask.textForValue}>Title</Text>
          <TextInput
            style={StylesForAddNewTask.textInputStyle}
            placeholder="Enter Task"
          />
        </View>
        <View style={StylesForAddNewTask.viewForFormSection}>
          <Text style={StylesForAddNewTask.textForValue}>Reminder Date</Text>
          <View style={StylesForAddNewTask.viewForTextInput}>
            <TextInput
              style={StylesForAddNewTask.textInputStyleForDate}
              placeholder="Set Date"
              onFocus={onPressAndFocusOfInputOfCalenderIcon}
              //   pointerEvents="none"
            />
            <Pressable
              onPress={onPressAndFocusOfInputOfCalenderIcon}
              style={StylesForAddNewTaskScreen.forCalenderButton}
            >
              <CalenderIcon stroke={"black"} />
            </Pressable>
          </View>
        </View>

        <View style={StylesForAddNewTask.viewForFormSection}>
          <Text style={StylesForAddNewTask.textForValue}>Reminder Time</Text>
          <View style={StylesForAddNewTask.viewForTextInput}>
            <TextInput
              style={StylesForAddNewTask.textInputStyleForDate}
              placeholder="Set Time"
              onFocus={onPressAndFocusOfInputOfClockIcon}
              //   pointerEvents="none"
            />
            <Pressable
              onPress={onPressAndFocusOfInputOfClockIcon}
              style={StylesForAddNewTaskScreen.forCalenderButton}
            >
              <ClockIcon stroke={"black"} />
            </Pressable>
          </View>
        </View>

        <View style={StylesForAddNewTask.viewForFormSectionOfNotes}>
          <Text style={StylesForAddNewTask.textForValue}>Notes (optional)</Text>
          <TextInput
            style={StylesForAddNewTask.textInputForNotes}
            multiline={true}
            textAlignVertical="top"
            placeholder="Write something"
            // numberOfLines={100}
          />
        </View>

        <View style={StylesForAddNewTaskScreen.viewForRepeat}>
          <Text style={StylesForAddNewTask.textForValue}>Repeat</Text>
          <BouncyCheckbox
            size={25}
            fillColor="#2A0800"
            unFillColor="#FFFFFF"
            text="Custom Checkbox"
            iconStyle={{ borderColor: "red" }}
            innerIconStyle={{ borderWidth: 2 }}
            textStyle={{ fontFamily: "JosefinSans-Regular" }}
            onPress={(isChecked) => {
                setIsCheckboxChecked(isChecked);
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({});
