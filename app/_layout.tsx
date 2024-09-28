import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen options={{headerShown: false}} name="index"/>
        <Stack.Screen options={{headerShown: false}} name="AddNewTaskScreen/AddNewTaskScreen"/>
    </Stack>
  )
}

const styles = StyleSheet.create({})