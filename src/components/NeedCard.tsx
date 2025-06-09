import type React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"
import { colors } from "../styles/colors"

interface NeedCardProps {
  need: {
    id: string
    type: string
    description: string
    priority: string
    icon: keyof typeof Feather.glyphMap
  }
}

const NeedCard: React.FC<NeedCardProps> = ({ need }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Urgent":
        return "#EF4444"
      case "Medium":
        return "#F59E0B"
      case "Low":
        return "#10B981"
      default:
        return colors.text.secondary
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name={need.icon} size={20} color={colors.text.primary} />
      </View>
      <View style={styles.content}>
        <Text style={styles.type}>{need.type}</Text>
        <Text style={styles.description}>{need.description}</Text>
      </View>
      <View style={[styles.priorityBadge, { backgroundColor: getPriorityColor(need.priority) }]}>
        <Text style={styles.priorityText}>{need.priority}</Text>
      </View>
      <Feather name="check" size={16} color="#10B981" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  type: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text.primary,
    marginBottom: 2,
  },
  description: {
    fontSize: 12,
    color: colors.text.secondary,
  },
  priorityBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    marginRight: 8,
  },
  priorityText: {
    fontSize: 10,
    color: colors.white,
    fontWeight: "500",
  },
})

export default NeedCard
