import type React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons"
import { colors } from "../styles/colors"

const SearchCard: React.FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name="search" size={20} color={colors.white} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Find Shelters Nearby</Text>
        <Text style={styles.subtitle}>Discover available shelters in your area</Text>
      </View>
      <Feather name="chevron-right" size={20} color={colors.text.secondary} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text.primary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: colors.text.secondary,
  },
})

export default SearchCard
