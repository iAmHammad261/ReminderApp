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
import React, { useEffect, useState } from "react";
import StylesForAddNewTask from "../styles/StylesForAddNewTaskScreen";
import CalenderIcon from "../components/CalenderIcon.js";
import ClockIcon from "../components/ClockIcon.js";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import StylesForAddNewTaskScreen from "../styles/StylesForAddNewTaskScreen";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ScrollView } from "react-native";
import { Chip } from "react-native-paper";
import { useRouter } from "expo-router";

export default function CreateNewTaskScreen() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date(new Date().getTime()));
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [arrayOfSelectedOption, setArrayOfSelectedOption] = useState([]);
  const [errorsForFormValidation, setErrorsForFormValidation] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    reminderDate: new Date(),
    reminderTime: new Date(new Date().getTime()),
    note: "",
    repeat: [],
  });
  const router = useRouter();

  const onChangeOfTime = (event, selectedTime) => {
    const currentTime = selectedTime;
    console.log("current time" + currentTime);
    setTime(new Date(currentTime));
    setFormData((formData) => ({ ...formData, reminderTime: currentTime }));
    // setTime((new Date(currentTime).toLocaleTimeString([], { hour12: false })))
  };

  const onChangeOfDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(new Date(currentDate));
    setFormData((formData) => ({ ...formData, reminderDate: currentDate }));
    // setTime((new Date(currentTime).toLocaleTimeString([], { hour12: false })))
  };

  const handleInputChange = (key, value) => {
    setFormData((formData) => ({ ...formData, [key]: value }));
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
    // console.log("executed ")
    Keyboard.dismiss();
    DateTimePickerAndroid.open({
      value: time,
      onChange: onChangeOfTime,
      mode: "time",
      display: "default",
      is24Hour: true,
    });
  };

  const onPressOfSavePressable = () => {
    router.navigate("/");
  };

  const handlePressOfPressableForRepeat = (id) => {
    // console.log("pressable pressed");
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    if (arrayOfSelectedOption.includes(days[id])) {
      // Remove "Monday" from the array immutably
      setFormData((formData) => ({
        ...formData,
        repeat: arrayOfSelectedOption.filter((item) => item !== days[id]),
      }));
      setArrayOfSelectedOption((arrayOfSelectedOption) =>
        arrayOfSelectedOption.filter((item) => item !== days[id])
      );
    } else {
      // Add "Monday" to the array immutably
      setFormData((formData) => ({
        ...formData,
        repeat: [...arrayOfSelectedOption, days[id]],
      }));
      setArrayOfSelectedOption((arrayOfSelectedOption) => [
        ...arrayOfSelectedOption,
        days[id],
      ]);
    }
  };

  useEffect(() => {
    console.log(formData);
    console.log(formData.reminderDate.toDateString());
  }, [formData]);

  const checkForFormValidation = (dataToBeChecked) => {
    return (( !isCheckboxChecked && dataToBeChecked.title !== '') | ( isCheckboxChecked && ( dataToBeChecked.repeat.length > 0) & (dataToBeChecked.title !== '')))

  }

  const validateOnSavePressable = () => {
    if(checkForFormValidation(formData))
    {
      router.navigate('/')
    }
    else{
      console.log("unsuccessful")
    }

  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={StylesForAddNewTask.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Heading of Task */}
        <View style={StylesForAddNewTask.viewForMainHeading}>
          <Text style={StylesForAddNewTask.mainTextHeading}>New Task</Text>
        </View>

        <KeyboardAvoidingView
          style={StylesForAddNewTask.containerForForm}
          // behavior="padding"
          // keyboardVerticalOffset={0}
        >
          {/* Form */}
          <View style={StylesForAddNewTask.viewForFormSection}>
            <Text style={StylesForAddNewTask.textForValue}>Title</Text>
            <TextInput
              style={[
                StylesForAddNewTask.textInputStyle,
                formData.title === "" && { borderColor: "red", borderWidth: 2 },
              ]}
              placeholder="Enter Task"
              value={formData.title}
              onChangeText={(value) => handleInputChange("title", value)}
            />
          </View>
          <View style={StylesForAddNewTask.viewForFormSection}>
            <Text style={StylesForAddNewTask.textForValue}>Reminder Date</Text>
            <View style={StylesForAddNewTask.viewForTextInput}>
              <TextInput
                style={StylesForAddNewTask.textInputStyleForDate}
                value={date.toDateString()}
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
                value={time.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
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
            <Text style={StylesForAddNewTask.textForValue}>
              Notes (optional)
            </Text>
            <TextInput
              style={StylesForAddNewTask.textInputForNotes}
              multiline={true}
              textAlignVertical="top"
              placeholder="Write something"
              onChangeText={(value) => {
                handleInputChange("note", value);
              }}
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
          {isCheckboxChecked ? (
            <View style={StylesForAddNewTaskScreen.viewForChips}>
              <View style={StylesForAddNewTaskScreen.ViewForChipsOnFirstLine}>
                <Pressable
                  style={[
                    arrayOfSelectedOption.includes("Monday")
                      ? StylesForAddNewTaskScreen.forOptionSelected
                      : StylesForAddNewTaskScreen.forOption,

                    isCheckboxChecked & (arrayOfSelectedOption.length == 0) && {
                      borderWidth: 2,
                      borderColor: "red",
                    },
                  ]}
                  onPress={() => handlePressOfPressableForRepeat("0")}
                >
                  <Text
                    style={[
                      arrayOfSelectedOption.includes("Monday")
                        ? StylesForAddNewTaskScreen.styleForTextOfChipsIfPressed
                        : StylesForAddNewTaskScreen.styleForTextOfChips,
                    ]}
                  >
                    Monday
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    arrayOfSelectedOption.includes("Tuesday")
                      ? StylesForAddNewTaskScreen.forOptionSelected
                      : StylesForAddNewTaskScreen.forOption,
                    isCheckboxChecked & (arrayOfSelectedOption.length == 0) && {
                      borderWidth: 2,
                      borderColor: "red",
                    },
                  ]}
                  onPress={() => handlePressOfPressableForRepeat("1")}
                >
                  <Text
                    style={[
                      arrayOfSelectedOption.includes("Tuesday")
                        ? StylesForAddNewTaskScreen.styleForTextOfChipsIfPressed
                        : StylesForAddNewTaskScreen.styleForTextOfChips,
                    ]}
                  >
                    Tuesday
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    arrayOfSelectedOption.includes("Wednesday")
                      ? StylesForAddNewTaskScreen.forOptionSelected
                      : StylesForAddNewTaskScreen.forOption,
                    isCheckboxChecked & (arrayOfSelectedOption.length == 0) && {
                      borderWidth: 2,
                      borderColor: "red",
                    },
                  ]}
                  onPress={() => handlePressOfPressableForRepeat("2")}
                >
                  <Text
                    style={[
                      arrayOfSelectedOption.includes("Wednesday")
                        ? StylesForAddNewTaskScreen.styleForTextOfChipsIfPressed
                        : StylesForAddNewTaskScreen.styleForTextOfChips,
                    ]}
                  >
                    Wednesday
                  </Text>
                </Pressable>
              </View>
              <View style={StylesForAddNewTaskScreen.ViewForChipsOnSecondLine}>
                <Pressable
                  style={[
                    arrayOfSelectedOption.includes("Thursday")
                      ? StylesForAddNewTaskScreen.forOptionSelected
                      : StylesForAddNewTaskScreen.forOption,
                    isCheckboxChecked & (arrayOfSelectedOption.length == 0) && {
                      borderWidth: 2,
                      borderColor: "red",
                    },
                  ]}
                  onPress={() => handlePressOfPressableForRepeat("3")}
                >
                  <Text
                    style={[
                      arrayOfSelectedOption.includes("Thursday")
                        ? StylesForAddNewTaskScreen.styleForTextOfChipsIfPressed
                        : StylesForAddNewTaskScreen.styleForTextOfChips,
                    ]}
                  >
                    Thursday
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    arrayOfSelectedOption.includes("Friday")
                      ? StylesForAddNewTaskScreen.forOptionSelected
                      : StylesForAddNewTaskScreen.forOption,
                    isCheckboxChecked & (arrayOfSelectedOption.length == 0) && {
                      borderWidth: 2,
                      borderColor: "red",
                    },
                  ]}
                  onPress={() => handlePressOfPressableForRepeat("4")}
                >
                  <Text
                    style={[
                      arrayOfSelectedOption.includes("Friday")
                        ? StylesForAddNewTaskScreen.styleForTextOfChipsIfPressed
                        : StylesForAddNewTaskScreen.styleForTextOfChips,
                    ]}
                  >
                    Friday
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    arrayOfSelectedOption.includes("Saturday")
                      ? StylesForAddNewTaskScreen.forOptionSelected
                      : StylesForAddNewTaskScreen.forOption,
                    isCheckboxChecked & (arrayOfSelectedOption.length == 0) && {
                      borderWidth: 2,
                      borderColor: "red",
                    },
                  ]}
                  onPress={() => handlePressOfPressableForRepeat("5")}
                >
                  <Text
                    style={[
                      arrayOfSelectedOption.includes("Saturday")
                        ? StylesForAddNewTaskScreen.styleForTextOfChipsIfPressed
                        : StylesForAddNewTaskScreen.styleForTextOfChips,
                    ]}
                  >
                    Saturday
                  </Text>
                </Pressable>
              </View>
              <View style={StylesForAddNewTaskScreen.ViewForChipsOnSecondLine}>
                <Pressable
                  style={[
                    arrayOfSelectedOption.includes("Sunday")
                      ? StylesForAddNewTaskScreen.forOptionSelected
                      : StylesForAddNewTaskScreen.forOption,
                    isCheckboxChecked & (arrayOfSelectedOption.length == 0) && {
                      borderWidth: 2,
                      borderColor: "red",
                    },
                  ]}
                  onPress={() => handlePressOfPressableForRepeat("6")}
                >
                  <Text
                    style={[
                      arrayOfSelectedOption.includes("Sunday")
                        ? StylesForAddNewTaskScreen.styleForTextOfChipsIfPressed
                        : StylesForAddNewTaskScreen.styleForTextOfChips,
                    ]}
                  >
                    Sunday
                  </Text>
                </Pressable>
              </View>
            </View>
          ) : (
            <View></View>
          )}
          <View
            style={StylesForAddNewTaskScreen.viewForPressablesOfCancelAndAdd}
          >
            <Pressable style={StylesForAddNewTaskScreen.pressableOfCancel}>
              <Text style={StylesForAddNewTaskScreen.textOfPressableOfCancel}>
                Clear
              </Text>
            </Pressable>
            <Pressable
              onPress={validateOnSavePressable}
              style={StylesForAddNewTaskScreen.pressableOfSave}
            >
              <Text style={StylesForAddNewTaskScreen.textOfPressableOfSave}>
                Save
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
