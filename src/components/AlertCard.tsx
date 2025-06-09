import type React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"

interface AlertCardProps {
  title: string
  message: string
  icon: keyof typeof Feather.glyphMap
}

const AlertCard: React.FC<AlertCardProps> = ({ title, message, icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name={icon} size={20} color="#D97706" />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FEF3C7",
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#FED7AA",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#92400E",
    marginBottom: 4,
  },
  message: {
    fontSize: 12,
    color: "#92400E",
    lineHeight: 16,
  },
})

export default AlertCard
