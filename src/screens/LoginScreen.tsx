"use client"

import { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import { useNavigation } from "@react-navigation/native"

import InputField from "../components/InputField"
import Button from "../components/Button"
import Logo from "../components/Logo"
import { colors } from "../styles/colors"

const LoginScreen = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = () => {
    // Implementação futura da lógica de login
    console.log("Login com:", { email, password })
    // Navigate to main app
    navigation.navigate("Main" as never)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardAvoid}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Logo />

            <Text style={styles.title}>ABRIGO HUB</Text>

            <Text style={styles.subtitle}>Bem-vindo ao Abrigo Hub – Seu lugar seguro em momentos de necessidade</Text>

            <View style={styles.formContainer}>
              <Text style={styles.inputLabel}>E-mail</Text>
              <InputField
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu e-mail"
                iconName="mail"
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <Text style={styles.inputLabel}>Senha</Text>
              <InputField
                value={password}
                onChangeText={setPassword}
                placeholder="Digite sua senha"
                iconName="lock"
                secureTextEntry={!showPassword}
                rightIcon={showPassword ? "eye-off" : "eye"}
                onRightIconPress={togglePasswordVisibility}
              />

              <Button title="Conecte-se" onPress={handleLogin} style={styles.loginButton} />

              <TouchableOpacity style={styles.createAccountButton}>
                <Text style={styles.createAccountText}>Criar uma conta</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.forgotPasswordButton}>
                <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.footer}>© 2025 Abrigo Hub. Todos os direitos reservados.</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text.primary,
    marginTop: 16,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 32,
    maxWidth: "80%",
    lineHeight: 22,
  },
  formContainer: {
    width: "100%",
    maxWidth: 320,
  },
  inputLabel: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 8,
    marginTop: 16,
  },
  loginButton: {
    marginTop: 24,
  },
  createAccountButton: {
    marginTop: 16,
    alignItems: "center",
  },
  createAccountText: {
    fontSize: 14,
    color: colors.text.primary,
    fontWeight: "500",
  },
  forgotPasswordButton: {
    marginTop: 12,
    alignItems: "center",
  },
  forgotPasswordText: {
    fontSize: 14,
    color: colors.text.secondary,
  },
  footer: {
    fontSize: 12,
    color: colors.text.secondary,
    textAlign: "center",
    marginBottom: 16,
    marginTop: 24,
  },
})

export default LoginScreen
