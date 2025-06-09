"use client"

import { useState, useEffect } from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Feather } from "@expo/vector-icons"
import { useNavigation, useRoute } from "@react-navigation/native"

import { colors } from "../styles/colors"
import { apiService, type Abrigo, type CreateAbrigoData } from "../services/api"
import InputField from "../components/InputField"
import Button from "../components/Button"

const CreateEditShelterScreen = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { mode, shelter } = route.params as { mode: "create" | "edit"; shelter?: Abrigo }

  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<CreateAbrigoData>({
    nome: "",
    descricao: "",
    endereco: "",
    cidade: "",
    estado: "",
    cep: "",
    capacidade: 0,
    ocupacaoAtual: 0,
    status: "Ativo",
    usuarioId: 1, // Em uma implementação real, isso viria do contexto de autenticação
    latitude: 0,
    longitude: 0,
  })

  useEffect(() => {
    if (mode === "edit" && shelter) {
      setFormData({
        nome: shelter.nome,
        descricao: shelter.descricao,
        endereco: shelter.endereco,
        cidade: shelter.cidade,
        estado: shelter.estado,
        cep: shelter.cep,
        capacidade: shelter.capacidade,
        ocupacaoAtual: shelter.ocupacaoAtual,
        status: shelter.status,
        usuarioId: shelter.usuarioId,
        latitude: shelter.latitude,
        longitude: shelter.longitude,
      })
    }
  }, [mode, shelter])

  const updateField = (field: keyof CreateAbrigoData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const validateForm = (): boolean => {
    if (!formData.nome.trim()) {
      Alert.alert("Erro", "Nome do abrigo é obrigatório")
      return false
    }
    if (!formData.endereco.trim()) {
      Alert.alert("Erro", "Endereço é obrigatório")
      return false
    }
    if (!formData.cidade.trim()) {
      Alert.alert("Erro", "Cidade é obrigatória")
      return false
    }
    if (formData.capacidade <= 0) {
      Alert.alert("Erro", "Capacidade deve ser maior que zero")
      return false
    }
    if (formData.ocupacaoAtual < 0) {
      Alert.alert("Erro", "Ocupação atual não pode ser negativa")
      return false
    }
    if (formData.ocupacaoAtual > formData.capacidade) {
      Alert.alert("Erro", "Ocupação atual não pode ser maior que a capacidade")
      return false
    }
    return true
  }

  const handleSave = async () => {
    if (!validateForm()) return

    setLoading(true)
    try {
      if (mode === "create") {
        await apiService.createAbrigo(formData)
        Alert.alert("Sucesso", "Abrigo criado com sucesso", [{ text: "OK", onPress: () => navigation.goBack() }])
      } else if (mode === "edit" && shelter) {
        await apiService.updateAbrigo(shelter.id, formData)
        Alert.alert("Sucesso", "Abrigo atualizado com sucesso", [{ text: "OK", onPress: () => navigation.goBack() }])
      }
    } catch (error) {
      Alert.alert("Erro", `Não foi possível ${mode === "create" ? "criar" : "atualizar"} o abrigo`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color={colors.text.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{mode === "create" ? "Criar Abrigo" : "Editar Abrigo"}</Text>
        <View style={styles.placeholder} />
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardAvoid}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
          <View style={styles.form}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Informações Básicas</Text>

              <Text style={styles.inputLabel}>Nome do Abrigo *</Text>
              <InputField
                value={formData.nome}
                onChangeText={(value) => updateField("nome", value)}
                placeholder="Ex: Abrigo Esperança"
                iconName="home"
              />

              <Text style={styles.inputLabel}>Descrição</Text>
              <InputField
                value={formData.descricao}
                onChangeText={(value) => updateField("descricao", value)}
                placeholder="Descrição do abrigo"
                iconName="file-text"
                multiline
              />
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Localização</Text>

              <Text style={styles.inputLabel}>Endereço *</Text>
              <InputField
                value={formData.endereco}
                onChangeText={(value) => updateField("endereco", value)}
                placeholder="Rua, número, bairro"
                iconName="map-pin"
              />

              <Text style={styles.inputLabel}>Cidade *</Text>
              <InputField
                value={formData.cidade}
                onChangeText={(value) => updateField("cidade", value)}
                placeholder="São Paulo"
                iconName="map"
              />

              <View style={styles.row}>
                <View style={styles.halfWidth}>
                  <Text style={styles.inputLabel}>Estado</Text>
                  <InputField
                    value={formData.estado}
                    onChangeText={(value) => updateField("estado", value)}
                    placeholder="SP"
                    iconName="map"
                  />
                </View>
                <View style={styles.halfWidth}>
                  <Text style={styles.inputLabel}>CEP</Text>
                  <InputField
                    value={formData.cep}
                    onChangeText={(value) => updateField("cep", value)}
                    placeholder="00000-000"
                    iconName="hash"
                  />
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Capacidade</Text>

              <View style={styles.row}>
                <View style={styles.halfWidth}>
                  <Text style={styles.inputLabel}>Capacidade Total *</Text>
                  <InputField
                    value={formData.capacidade.toString()}
                    onChangeText={(value) => updateField("capacidade", Number.parseInt(value) || 0)}
                    placeholder="100"
                    iconName="users"
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.halfWidth}>
                  <Text style={styles.inputLabel}>Ocupação Atual</Text>
                  <InputField
                    value={formData.ocupacaoAtual.toString()}
                    onChangeText={(value) => updateField("ocupacaoAtual", Number.parseInt(value) || 0)}
                    placeholder="50"
                    iconName="user"
                    keyboardType="numeric"
                  />
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Coordenadas (Opcional)</Text>

              <View style={styles.row}>
                <View style={styles.halfWidth}>
                  <Text style={styles.inputLabel}>Latitude</Text>
                  <InputField
                    value={formData.latitude.toString()}
                    onChangeText={(value) => updateField("latitude", Number.parseFloat(value) || 0)}
                    placeholder="-23.5505"
                    iconName="navigation"
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.halfWidth}>
                  <Text style={styles.inputLabel}>Longitude</Text>
                  <InputField
                    value={formData.longitude.toString()}
                    onChangeText={(value) => updateField("longitude", Number.parseFloat(value) || 0)}
                    placeholder="-46.6333"
                    iconName="navigation"
                    keyboardType="numeric"
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <Button
            title={mode === "create" ? "Criar Abrigo" : "Salvar Alterações"}
            onPress={handleSave}
            loading={loading}
          />
        </View>
      </KeyboardAvoidingView>
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
  placeholder: {
    width: 32,
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  form: {
    padding: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text.primary,
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 8,
    marginTop: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfWidth: {
    width: "48%",
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
})

export default CreateEditShelterScreen
