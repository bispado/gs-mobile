import type React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"
import { colors } from "../styles/colors"

interface WeatherCardProps {
  location: string
  temperature: string
  condition: string
}

const WeatherCard: React.FC<WeatherCardProps> = ({ location, temperature, condition }) => {
  return (
    <View style={styles.container}>
      <Feather name="map-pin" size={16} color={colors.text.secondary} />
      <Text style={styles.location}>
        {location}, {temperature}
      </Text>
      <Text style={styles.condition}>{condition}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#F8F9FA",
    marginHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  location: {
    fontSize: 14,
    color: colors.text.primary,
    marginLeft: 8,
    marginRight: 12,
  },
  condition: {
    fontSize: 14,
    color: colors.text.secondary,
  },
})

export default WeatherCard
