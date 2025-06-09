import type React from "react"
import { View, TextInput, StyleSheet, TouchableOpacity, type TextInputProps } from "react-native"
import { Feather } from "@expo/vector-icons"
import { colors } from "../styles/colors"

interface InputFieldProps extends TextInputProps {
  iconName: keyof typeof Feather.glyphMap
  rightIcon?: keyof typeof Feather.glyphMap
  onRightIconPress?: () => void
  multiline?: boolean
}

const InputField: React.FC<InputFieldProps> = ({ iconName, rightIcon, onRightIconPress, multiline, ...props }) => {
  return (
    <View style={[styles.container, multiline && styles.multilineContainer]}>
      <Feather name={iconName} size={18} color={colors.icon} style={[styles.icon, multiline && styles.multilineIcon]} />
      <TextInput
        style={[styles.input, multiline && styles.multilineInput]}
        placeholderTextColor={colors.placeholder}
        multiline={multiline}
        textAlignVertical={multiline ? "top" : "center"}
        {...props}
      />
      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress} style={styles.rightIconContainer}>
          <Feather name={rightIcon} size={18} color={colors.icon} />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
    backgroundColor: colors.white,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: "100%",
    color: colors.text.primary,
    fontSize: 14,
  },
  rightIconContainer: {
    padding: 4,
  },
  multilineContainer: {
    minHeight: 80,
    alignItems: "flex-start",
    paddingTop: 12,
  },
  multilineIcon: {
    marginTop: 2,
  },
  multilineInput: {
    minHeight: 56,
    textAlignVertical: "top",
  },
})

export default InputField
