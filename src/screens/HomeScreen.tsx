"use client"

import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { useState, useEffect } from "react"

import { colors } from "../styles/colors"
import ShelterCard from "../components/ShelterCard"
import WeatherCard from "../components/WeatherCard"
import SearchCard from "../components/SearchCard"
import AlertCard from "../components/AlertCard"
import { apiService, type WeatherData } from "../services/api"

const HomeScreen = () => {
  const navigation = useNavigation()
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)

  const shelters = [
    {
      id: "1",
      name: "Casa Esperança",
      distance: "1.2 km away",
      status: "Open",
      capacity: { current: 45, max: 60 },
      urgentNeed: true,
      amenities: ["bed", "shower"],
    },
    {
      id: "2",
      name: "Abrigo São José",
      distance: "2.1 km away",
      status: "Full",
      capacity: { current: 80, max: 80 },
      urgentNeed: false,
      amenities: ["bed", "wifi"],
    },
    {
      id: "3",
      name: "Centro Acolhida",
      distance: "3.5 km away",
      status: "Open",
      capacity: { current: 32, max: 50 },
      urgentNeed: false,
      amenities: ["bed", "shower"],
    },
  ]

  const handleShelterPress = (shelter: any) => {
    navigation.navigate("ShelterDetail" as never, { shelter } as never)
  }

  const loadWeatherData = async () => {
    try {
      const weather = await apiService.getWeather("São Paulo")
      setWeatherData(weather)
    } catch (error) {
      console.error("Error loading weather:", error)
    }
  }

  useEffect(() => {
    loadWeatherData()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello, Maria!</Text>
            <Text style={styles.subGreeting}>Welcome back</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Feather name="user" size={24} color={colors.text.primary} />
          </TouchableOpacity>
        </View>

        <WeatherCard
          location={weatherData?.name || "São Paulo"}
          temperature={weatherData ? `${Math.round(weatherData.main.temp)}°C` : "23°C"}
          condition={weatherData?.weather[0]?.description || "Light rain"}
        />

        <TouchableOpacity style={styles.manageShelterCard} onPress={() => navigation.navigate("MyShelters" as never)}>
          <View style={styles.manageShelterIcon}>
            <Feather name="home" size={20} color={colors.white} />
          </View>
          <View style={styles.manageShelterContent}>
            <Text style={styles.manageShelterTitle}>Manage My Shelter</Text>
            <Text style={styles.manageShelterSubtitle}>Update capacity and resources</Text>
          </View>
          <Feather name="chevron-right" size={20} color={colors.text.secondary} />
        </TouchableOpacity>

        <SearchCard />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Nearby Shelters</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sheltersList}>
          {shelters.map((shelter) => (
            <ShelterCard key={shelter.id} shelter={shelter} onPress={() => handleShelterPress(shelter)} />
          ))}
        </View>

        <AlertCard
          title="Weather Alert"
          message="Due to rain, check for nearby open shelters and stay safe indoors when possible."
          icon="alert-triangle"
        />
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
    paddingTop: 10,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text.primary,
  },
  subGreeting: {
    fontSize: 14,
    color: colors.text.secondary,
    marginTop: 2,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text.primary,
  },
  viewAllText: {
    fontSize: 14,
    color: colors.primary,
  },
  sheltersList: {
    paddingHorizontal: 20,
  },
  manageShelterCard: {
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
  manageShelterIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  manageShelterContent: {
    flex: 1,
  },
  manageShelterTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text.primary,
    marginBottom: 4,
  },
  manageShelterSubtitle: {
    fontSize: 14,
    color: colors.text.secondary,
  },
})

export default HomeScreen
