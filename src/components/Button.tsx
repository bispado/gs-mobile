import type React from "react"
import { TouchableOpacity, Text, StyleSheet, type ViewStyle, type TextStyle, ActivityIndicator } from "react-native"
import { colors } from "../styles/colors"

interface ButtonProps {
  title: string
  onPress: () => void
  style?: ViewStyle
  textStyle?: TextStyle
  disabled?: boolean
  loading?: boolean
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style, textStyle, disabled = false, loading = false }) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.buttonDisabled, style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonDisabled: {
    backgroundColor: colors.disabled,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "500",
  },
})

export default Button
