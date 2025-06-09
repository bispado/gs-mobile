"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Feather } from "@expo/vector-icons"
import { useNavigation, useRoute } from "@react-navigation/native"

import { colors } from "../styles/colors"
import Button from "../components/Button"
import NeedCard from "../components/NeedCard"
import DonationCard from "../components/DonationCard"

const ShelterDetailScreen = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { shelter } = route.params as any

  const [needs] = useState([
    { id: "1", type: "Food", description: "25 meals needed", priority: "Urgent", icon: "utensils" },
    { id: "2", type: "Water", description: "50 bottles needed", priority: "Medium", icon: "droplet" },
    { id: "3", type: "Blankets", description: "15 units needed", priority: "Low", icon: "square" },
  ])

  const [recentDonations] = useState([
    {
      id: "1",
      donor: "Maria Rodriguez",
      timeAgo: "2 hours ago",
      avatar: "👩‍💼",
    },
    {
      id: "2",
      donor: "Local Church",
      timeAgo: "1 day ago",
      avatar: "⛪",
    },
  ])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color={colors.text.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Shelter San Miguel</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Feather name="settings" size={24} color={colors.text.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.shelterInfo}>
          <View style={styles.shelterHeader}>
            <View style={styles.shelterIcon}>
              <Feather name="home" size={24} color={colors.white} />
            </View>
            <View style={styles.shelterDetails}>
              <Text style={styles.shelterName}>Shelter San Miguel</Text>
              <Text style={styles.shelterAddress}>123 Main Street, Downtown</Text>
              <View style={styles.statusContainer}>
                <Text style={styles.statusText}>Open</Text>
                <Text style={styles.lastUpdated}>12/20 spots filled</Text>
              </View>
              <Text style={styles.lastUpdated}>Last updated: 2 hours ago</Text>
            </View>
          </View>
        </View>

        <View style={styles.weatherSection}>
          <Feather name="cloud-rain" size={20} color={colors.text.secondary} />
          <Text style={styles.weatherText}>72°F</Text>
          <Text style={styles.weatherCondition}>Partly Cloudy</Text>
          <View style={styles.weatherRight}>
            <Text style={styles.weatherToday}>Today</Text>
            <Text style={styles.weatherRange}>High 75° Low 68°</Text>
          </View>
        </View>

        <View style={styles.tabsContainer}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeTabText]}>Needs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Resources</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.needsSection}>
          {needs.map((need) => (
            <NeedCard key={need.id} need={need} />
          ))}
        </View>

        <View style={styles.actionsSection}>
          <Button title="+ Add Need" onPress={() => {}} style={styles.actionButton} />
          <Button title="🔄 Update Shelter Status" onPress={() => {}} style={styles.actionButton} />
          <Button title="⚠️ Request Help" onPress={() => {}} style={[styles.actionButton, styles.helpButton]} />
        </View>

        <View style={styles.donationsSection}>
          <Text style={styles.sectionTitle}>Recent Donations</Text>
          {recentDonations.map((donation) => (
            <DonationCard key={donation.id} donation={donation} />
          ))}
        </View>

        <View style={styles.emergencySection}>
          <View style={styles.emergencyHeader}>
            <Feather name="phone" size={20} color={colors.text.primary} />
            <Text style={styles.emergencyTitle}>Emergency Contact</Text>
          </View>
          <Text style={styles.emergencyText}>For urgent situations, call: 911</Text>
          <Text style={styles.emergencySubtext}>Or contact to update shelter capacity regularly</Text>
        </View>
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
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text.primary,
  },
  settingsButton: {
    padding: 4,
  },
  shelterInfo: {
    padding: 20,
  },
  shelterHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  shelterIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.logo,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  shelterDetails: {
    flex: 1,
  },
  shelterName: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text.primary,
    marginBottom: 4,
  },
  shelterAddress: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 8,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  statusText: {
    fontSize: 14,
    color: "#22C55E",
    fontWeight: "500",
    marginRight: 12,
  },
  lastUpdated: {
    fontSize: 12,
    color: colors.text.secondary,
  },
  weatherSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#F8F9FA",
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  weatherText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text.primary,
    marginLeft: 8,
    marginRight: 12,
  },
  weatherCondition: {
    fontSize: 14,
    color: colors.text.secondary,
    flex: 1,
  },
  weatherRight: {
    alignItems: "flex-end",
  },
  weatherToday: {
    fontSize: 12,
    color: colors.text.secondary,
  },
  weatherRange: {
    fontSize: 12,
    color: colors.text.secondary,
  },
  tabsContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 16,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  tabText: {
    fontSize: 14,
    color: colors.text.secondary,
  },
  activeTabText: {
    color: colors.primary,
    fontWeight: "500",
  },
  needsSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  actionsSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  actionButton: {
    marginBottom: 12,
  },
  helpButton: {
    backgroundColor: "#EF4444",
  },
  donationsSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text.primary,
    marginBottom: 12,
  },
  emergencySection: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#F8F9FA",
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  emergencyHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  emergencyTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text.primary,
    marginLeft: 8,
  },
  emergencyText: {
    fontSize: 14,
    color: colors.text.primary,
    marginBottom: 4,
  },
  emergencySubtext: {
    fontSize: 12,
    color: colors.text.secondary,
  },
})

export default ShelterDetailScreen
