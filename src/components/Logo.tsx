import type React from "react"
import { View, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"
import { colors } from "../styles/colors"

const Logo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Feather name="home" size={32} color={colors.white} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: colors.logo,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default Logo
