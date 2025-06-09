import type React from "react"
import { View, Text, StyleSheet } from "react-native"
import { colors } from "../styles/colors"

interface DonationCardProps {
  donation: {
    id: string
    donor: string
    timeAgo: string
    avatar: string
  }
}

const DonationCard: React.FC<DonationCardProps> = ({ donation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.avatar}>{donation.avatar}</Text>
      <View style={styles.content}>
        <Text style={styles.donor}>{donation.donor}</Text>
        <Text style={styles.timeAgo}>{donation.timeAgo}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  avatar: {
    fontSize: 24,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  donor: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.text.primary,
    marginBottom: 2,
  },
  timeAgo: {
    fontSize: 12,
    color: colors.text.secondary,
  },
})

export default DonationCard
