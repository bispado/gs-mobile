"use client"

import type React from "react"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Alert } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

import { colors } from "../styles/colors"

const ProfileScreen = () => {
  const navigation = useNavigation()
  const [pushNotifications, setPushNotifications] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(false)

  const handleLogout = () => {
    Alert.alert("Log Out", "Are you sure you want to log out?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Log Out",
        style: "destructive",
        onPress: () => navigation.navigate("Login" as never),
      },
    ])
  }

  const handleEditProfile = () => {
    console.log("Edit profile pressed")
  }

  const handleMenuPress = () => {
    console.log("Menu pressed")
  }

  const ProfileOption = ({
    icon,
    title,
    subtitle,
    onPress,
    showArrow = true,
    rightComponent,
  }: {
    icon: keyof typeof Feather.glyphMap
    title: string
    subtitle?: string
    onPress?: () => void
    showArrow?: boolean
    rightComponent?: React.ReactNode
  }) => (
    <TouchableOpacity style={styles.optionContainer} onPress={onPress}>
      <View style={styles.optionLeft}>
        <Feather name={icon} size={20} color={colors.text.secondary} />
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionTitle}>{title}</Text>
          {subtitle && <Text style={styles.optionSubtitle}>{subtitle}</Text>}
        </View>
      </View>
      <View style={styles.optionRight}>
        {rightComponent}
        {showArrow && <Feather name="chevron-right" size={20} color={colors.text.secondary} />}
      </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
          <Feather name="more-vertical" size={24} color={colors.text.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Feather name="user" size={40} color={colors.text.secondary} />
            </View>
            <TouchableOpacity style={styles.editAvatarButton}>
              <Feather name="edit-2" size={12} color={colors.white} />
            </TouchableOpacity>
          </View>

          <View style={styles.userInfo}>
            <Text style={styles.userName}>Maria Santos</Text>
            <Text style={styles.userEmail}>maria.santos@email.com</Text>
            <Text style={styles.userPhone}>+55 11 99999-9999</Text>
            <Text style={styles.userRole}>Shelter Seeker</Text>
          </View>

          <TouchableOpacity onPress={handleEditProfile} style={styles.editButton}>
            <Feather name="edit-2" size={16} color={colors.text.secondary} />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Settings</Text>

          <ProfileOption icon="lock" title="Change Password" onPress={() => console.log("Change password")} />

          <ProfileOption
            icon="globe"
            title="Language"
            onPress={() => console.log("Language settings")}
            rightComponent={<Text style={styles.languageText}>English</Text>}
          />

          <ProfileOption
            icon="bell"
            title="Push Notifications"
            showArrow={false}
            rightComponent={
              <Switch
                value={pushNotifications}
                onValueChange={setPushNotifications}
                trackColor={{ false: colors.border, true: colors.primary }}
                thumbColor={colors.white}
              />
            }
          />

          <ProfileOption
            icon="mail"
            title="Email Notifications"
            showArrow={false}
            rightComponent={
              <Switch
                value={emailNotifications}
                onValueChange={setEmailNotifications}
                trackColor={{ false: colors.border, true: colors.primary }}
                thumbColor={colors.white}
              />
            }
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Activity</Text>

          <ProfileOption
            icon="bookmark"
            title="Saved Shelters"
            onPress={() => console.log("Saved shelters")}
            rightComponent={<Text style={styles.countText}>3</Text>}
          />
          <ProfileOption
            icon="home"
            title="Meus Abrigos"
            onPress={() => navigation.navigate("MyShelters" as never)}
            rightComponent={<Text style={styles.countText}>2</Text>}
          />

          <ProfileOption icon="heart" title="Donation History" onPress={() => console.log("Donation history")} />

          <ProfileOption icon="clock" title="Recent Searches" onPress={() => console.log("Recent searches")} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>

          <ProfileOption icon="shield" title="Privacy Policy" onPress={() => console.log("Privacy policy")} />

          <ProfileOption icon="help-circle" title="Contact Support" onPress={() => console.log("Contact support")} />
        </View>

        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>Version 1.2.3</Text>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Feather name="log-out" size={20} color={colors.text.primary} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
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
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.text.primary,
  },
  menuButton: {
    padding: 4,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  avatarContainer: {
    position: "relative",
    marginRight: 16,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
  },
  editAvatarButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.white,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text.primary,
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 2,
  },
  userPhone: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 2,
  },
  userRole: {
    fontSize: 12,
    color: colors.text.secondary,
    fontStyle: "italic",
  },
  editButton: {
    padding: 8,
  },
  section: {
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text.primary,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  optionTextContainer: {
    marginLeft: 16,
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    color: colors.text.primary,
  },
  optionSubtitle: {
    fontSize: 14,
    color: colors.text.secondary,
    marginTop: 2,
  },
  optionRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  languageText: {
    fontSize: 14,
    color: colors.text.secondary,
    marginRight: 8,
  },
  countText: {
    fontSize: 14,
    color: colors.text.secondary,
    marginRight: 8,
  },
  versionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    alignItems: "center",
  },
  versionText: {
    fontSize: 12,
    color: colors.text.secondary,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    marginHorizontal: 20,
    marginBottom: 32,
    borderRadius: 8,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  },
  logoutText: {
    fontSize: 16,
    color: colors.text.primary,
    marginLeft: 8,
    fontWeight: "500",
  },
})

export default ProfileScreen
