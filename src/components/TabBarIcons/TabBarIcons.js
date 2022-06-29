import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { Colors } from '../../style/colors';

const TabBarIcons = (props) => {
  return (
    <Ionicons name={props.name} size={26} color={props.focused ? Colors.green50 : Colors.grey40} />
  )
}

export default TabBarIcons