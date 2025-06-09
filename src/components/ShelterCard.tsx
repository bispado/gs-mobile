import type React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons"
import { colors } from "../styles/colors"

interface ShelterCardProps {
  shelter: {
    id: string
    name: string
    distance: string
    status: string
    capacity: { current: number; max: number }
    urgentNeed: boolean
    amenities: string[]
  }
  onPress: () => void
}

const ShelterCard: React.FC<ShelterCardProps> = ({ shelter, onPress }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "#22C55E"
      case "Full":
        return "#EF4444"
      default:
        return colors.text.secondary
    }
  }

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "bed":
        return "home"
      case "shower":
        return "droplet"
      case "wifi":
        return "wifi"
      default:
        return "circle"
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.name}>{shelter.name}</Text>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(shelter.status) }]}>
          <Text style={styles.statusText}>{shelter.status}</Text>
        </View>
      </View>

      <Text style={styles.distance}>{shelter.distance}</Text>

      <View style={styles.amenitiesContainer}>
        {shelter.amenities.map((amenity, index) => (
          <Feather
            key={index}
            name={getAmenityIcon(amenity) as keyof typeof Feather.glyphMap}
            size={16}
            color={colors.text.secondary}
            style={styles.amenityIcon}
          />
        ))}
      </View>

      {shelter.urgentNeed && (
        <View style={styles.urgentBadge}>
          <Text style={styles.urgentText}>Urgent Need</Text>
        </View>
      )}

      <Feather name="chevron-right" size={20} color={colors.text.secondary} style={styles.chevron} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text.primary,
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    color: colors.white,
    fontWeight: "500",
  },
  distance: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 12,
  },
  amenitiesContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
  amenityIcon: {
    marginRight: 8,
  },
  urgentBadge: {
    backgroundColor: "#FEF3C7",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  urgentText: {
    fontSize: 12,
    color: "#D97706",
    fontWeight: "500",
  },
  chevron: {
    position: "absolute",
    right: 16,
    top: "50%",
    marginTop: -10,
  },
})

export default ShelterCard
