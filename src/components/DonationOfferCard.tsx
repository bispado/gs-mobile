import type React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons"
import { colors } from "../styles/colors"

interface DonationOfferCardProps {
  donation: {
    id: string
    donor: string
    timeAgo: string
    type: string
    quantity: string
    description: string
    status: string
    avatar: string
  }
  onAccept: () => void
  onDecline: () => void
}

const DonationOfferCard: React.FC<DonationOfferCardProps> = ({ donation, onAccept, onDecline }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "#F59E0B"
      case "Accepted":
        return "#10B981"
      case "Declined":
        return "#EF4444"
      default:
        return colors.text.secondary
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Food Supplies":
        return "utensils"
      case "Water Bottles":
        return "droplet"
      case "Medical Supplies":
        return "heart"
      case "Clothing":
        return "shirt"
      default:
        return "package"
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.donorInfo}>
          <Text style={styles.avatar}>{donation.avatar}</Text>
          <View>
            <Text style={styles.donor}>{donation.donor}</Text>
            <Text style={styles.timeAgo}>{donation.timeAgo}</Text>
          </View>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(donation.status) }]}>
          <Text style={styles.statusText}>{donation.status}</Text>
        </View>
      </View>

      <View style={styles.donationInfo}>
        <View style={styles.typeContainer}>
          <Feather
            name={getTypeIcon(donation.type) as keyof typeof Feather.glyphMap}
            size={16}
            color={colors.text.primary}
          />
          <Text style={styles.type}>{donation.type}</Text>
        </View>
        <Text style={styles.quantity}>{donation.quantity}</Text>
      </View>

      <Text style={styles.description}>{donation.description}</Text>

      {donation.status === "Pending" && (
        <View style={styles.actions}>
          <TouchableOpacity style={styles.acceptButton} onPress={onAccept}>
            <Text style={styles.acceptText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.declineButton} onPress={onDecline}>
            <Text style={styles.declineText}>Decline</Text>
          </TouchableOpacity>
        </View>
      )}

      {donation.status === "Accepted" && (
        <Text style={styles.statusMessage}>Donation accepted. Please coordinate delivery with the donor.</Text>
      )}

      {donation.status === "Declined" && (
        <Text style={styles.statusMessage}>Donation declined - storage capacity full</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  donorInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatar: {
    fontSize: 24,
    marginRight: 12,
  },
  donor: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text.primary,
  },
  timeAgo: {
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 2,
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
  donationInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  typeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  type: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.text.primary,
    marginLeft: 8,
  },
  quantity: {
    fontSize: 14,
    color: colors.text.secondary,
  },
  description: {
    fontSize: 12,
    color: colors.text.secondary,
    lineHeight: 16,
    marginBottom: 16,
  },
  actions: {
    flexDirection: "row",
    gap: 12,
  },
  acceptButton: {
    flex: 1,
    backgroundColor: "#10B981",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
  },
  acceptText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.white,
  },
  declineButton: {
    flex: 1,
    backgroundColor: "#6B7280",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
  },
  declineText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.white,
  },
  statusMessage: {
    fontSize: 12,
    color: colors.text.secondary,
    fontStyle: "italic",
  },
})

export default DonationOfferCard
