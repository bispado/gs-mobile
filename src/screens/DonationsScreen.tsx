"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Feather } from "@expo/vector-icons"

import { colors } from "../styles/colors"
import DonationOfferCard from "../components/DonationOfferCard"

const DonationsScreen = () => {
  const [donations] = useState([
    {
      id: "1",
      donor: "Maria Rodriguez",
      timeAgo: "3 hours ago",
      type: "Food Supplies",
      quantity: "15 units",
      description:
        "I have canned goods and non-perishable items from our community drive. Happy to deliver this weekend!",
      status: "Pending",
      avatar: "👩‍💼",
    },
    {
      id: "2",
      donor: "Anonymous",
      timeAgo: "5 hours ago",
      type: "Water Bottles",
      quantity: "24 units",
      description: "Cases of bottled water available for pickup.",
      status: "Accepted",
      avatar: "👤",
    },
    {
      id: "3",
      donor: "Dr. James Wilson",
      timeAgo: "1 day ago",
      type: "Medical Supplies",
      quantity: "1 kit",
      description: "First aid kit with bandages, antiseptic, and basic medications. Can deliver tomorrow morning.",
      status: "Pending",
      avatar: "👨‍⚕️",
    },
    {
      id: "4",
      donor: "Community Center",
      timeAgo: "1 day ago",
      type: "Clothing",
      quantity: "50 items",
      description: "Mixed clothing donations - various sizes and types.",
      status: "Declined",
      avatar: "🏢",
    },
  ])

  const handleAccept = (donationId: string) => {
    console.log("Accepting donation:", donationId)
  }

  const handleDecline = (donationId: string) => {
    console.log("Declining donation:", donationId)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Feather name="arrow-left" size={24} color={colors.text.primary} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Incoming Donations</Text>
          <Text style={styles.headerSubtitle}>Review and accept donation offers</Text>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Feather name="bell" size={24} color={colors.text.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.shelterInfo}>
        <Text style={styles.shelterName}>Safe Haven Shelter</Text>
        <Text style={styles.shelterAddress}>123 Main Street</Text>
        <View style={styles.statusRow}>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>Open</Text>
          </View>
          <Text style={styles.donationCount}>12 donation offers</Text>
          <TouchableOpacity style={styles.sortButton}>
            <Feather name="filter" size={16} color={colors.text.secondary} />
            <Text style={styles.sortText}>Sort by date</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        {donations.map((donation) => (
          <DonationOfferCard
            key={donation.id}
            donation={donation}
            onAccept={() => handleAccept(donation.id)}
            onDecline={() => handleDecline(donation.id)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  backButton: {
    padding: 4,
    marginRight: 12,
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text.primary,
  },
  headerSubtitle: {
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 2,
  },
  notificationButton: {
    padding: 4,
  },
  shelterInfo: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  shelterName: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text.primary,
  },
  shelterAddress: {
    fontSize: 14,
    color: colors.text.secondary,
    marginTop: 2,
    marginBottom: 12,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusBadge: {
    backgroundColor: "#22C55E",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 12,
  },
  statusText: {
    fontSize: 12,
    color: colors.white,
    fontWeight: "500",
  },
  donationCount: {
    fontSize: 12,
    color: colors.text.secondary,
    flex: 1,
  },
  sortButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  sortText: {
    fontSize: 12,
    color: colors.text.secondary,
    marginLeft: 4,
  },
  scrollView: {
    flex: 1,
  },
})

export default DonationsScreen
