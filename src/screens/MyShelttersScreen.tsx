"use client"

import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, RefreshControl } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Feather } from "@expo/vector-icons"
import { useNavigation, useFocusEffect } from "@react-navigation/native"
import { useCallback } from "react"

import { colors } from "../styles/colors"
import { apiService, type Abrigo } from "../services/api"
import ShelterManagementCard from "../components/ShelterManagementCard"
import LoadingSpinner from "../components/LoadingSpinner"

const MySheltersScreen = () => {
  const navigation = useNavigation()
  const [shelters, setShelters] = useState<Abrigo[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  const currentUserId = 1 // Em uma implementação real, isso viria do contexto de autenticação

  const loadShelters = async () => {
    try {
      const userShelters = await apiService.getUserAbrigos(currentUserId)
      setShelters(userShelters)
    } catch (error) {
      console.error("Error loading shelters:", error)
      Alert.alert("Erro", "Não foi possível carregar os abrigos")
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadShelters()
    }, []),
  )

  const handleRefresh = () => {
    setRefreshing(true)
    loadShelters()
  }

  const handleCreateShelter = () => {
    navigation.navigate("CreateEditShelter" as never, { mode: "create" } as never)
  }

  const handleEditShelter = (shelter: Abrigo) => {
    navigation.navigate("CreateEditShelter" as never, { mode: "edit", shelter } as never)
  }

  const handleDeleteShelter = (shelter: Abrigo) => {
    Alert.alert("Confirmar Exclusão", `Tem certeza que deseja excluir o abrigo "${shelter.nome}"?`, [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Excluir",
        style: "destructive",
        onPress: async () => {
          try {
            await apiService.deleteAbrigo(shelter.id)
            loadShelters()
            Alert.alert("Sucesso", "Abrigo excluído com sucesso")
          } catch (error) {
            Alert.alert("Erro", "Não foi possível excluir o abrigo")
          }
        },
      },
    ])
  }

  const handleViewDetails = (shelter: Abrigo) => {
    navigation.navigate("ShelterDetail" as never, { shelter } as never)
  }

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color={colors.text.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Meus Abrigos</Text>
        <TouchableOpacity onPress={handleCreateShelter} style={styles.addButton}>
          <Feather name="plus" size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
      >
        {shelters.length === 0 ? (
          <View style={styles.emptyState}>
            <Feather name="home" size={64} color={colors.text.secondary} />
            <Text style={styles.emptyTitle}>Nenhum abrigo cadastrado</Text>
            <Text style={styles.emptySubtitle}>
              Crie seu primeiro abrigo para começar a ajudar pessoas em necessidade
            </Text>
            <TouchableOpacity style={styles.createFirstButton} onPress={handleCreateShelter}>
              <Text style={styles.createFirstButtonText}>Criar Primeiro Abrigo</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.sheltersList}>
            {shelters.map((shelter) => (
              <ShelterManagementCard
                key={shelter.id}
                shelter={shelter}
                onEdit={() => handleEditShelter(shelter)}
                onDelete={() => handleDeleteShelter(shelter)}
                onViewDetails={() => handleViewDetails(shelter)}
              />
            ))}
          </View>
        )}
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
  addButton: {
    padding: 4,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingTop: 100,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.text.primary,
    marginTop: 24,
    marginBottom: 8,
    textAlign: "center",
  },
  emptySubtitle: {
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 32,
  },
  createFirstButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  createFirstButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "500",
  },
  sheltersList: {
    padding: 20,
  },
})

export default MySheltersScreen
