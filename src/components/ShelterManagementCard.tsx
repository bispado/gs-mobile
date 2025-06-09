import type React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons"
import { colors } from "../styles/colors"
import type { Abrigo } from "../services/api"

interface ShelterManagementCardProps {
  shelter: Abrigo
  onEdit: () => void
  onDelete: () => void
  onViewDetails: () => void
}

const ShelterManagementCard: React.FC<ShelterManagementCardProps> = ({ shelter, onEdit, onDelete, onViewDetails }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ativo":
        return "#22C55E"
      case "Inativo":
        return "#EF4444"
      case "Manutenção":
        return "#F59E0B"
      default:
        return colors.text.secondary
    }
  }

  const occupancyPercentage = (shelter.ocupacaoAtual / shelter.capacidade) * 100

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content} onPress={onViewDetails}>
        <View style={styles.header}>
          <Text style={styles.name}>{shelter.nome}</Text>
          <View style={[styles.statusBadge, { backgroundColor: getStatusColor(shelter.status) }]}>
            <Text style={styles.statusText}>{shelter.status}</Text>
          </View>
        </View>

        <Text style={styles.address} numberOfLines={1}>
          {shelter.endereco}, {shelter.cidade} - {shelter.estado}
        </Text>

        <View style={styles.capacityContainer}>
          <View style={styles.capacityInfo}>
            <Text style={styles.capacityText}>
              {shelter.ocupacaoAtual}/{shelter.capacidade} pessoas
            </Text>
            <Text style={styles.capacityPercentage}>{occupancyPercentage.toFixed(0)}% ocupado</Text>
          </View>
          <View style={styles.capacityBar}>
            <View style={[styles.capacityFill, { width: `${Math.min(occupancyPercentage, 100)}%` }]} />
          </View>
        </View>

        {shelter.descricao && (
          <Text style={styles.description} numberOfLines={2}>
            {shelter.descricao}
          </Text>
        )}
      </TouchableOpacity>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={onEdit}>
          <Feather name="edit-2" size={16} color={colors.primary} />
          <Text style={styles.actionText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.deleteButton]} onPress={onDelete}>
          <Feather name="trash-2" size={16} color="#EF4444" />
          <Text style={[styles.actionText, styles.deleteText]}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    padding: 16,
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
    marginRight: 12,
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
  address: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 12,
  },
  capacityContainer: {
    marginBottom: 12,
  },
  capacityInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  capacityText: {
    fontSize: 14,
    color: colors.text.primary,
    fontWeight: "500",
  },
  capacityPercentage: {
    fontSize: 12,
    color: colors.text.secondary,
  },
  capacityBar: {
    height: 6,
    backgroundColor: "#E5E7EB",
    borderRadius: 3,
    overflow: "hidden",
  },
  capacityFill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 3,
  },
  description: {
    fontSize: 12,
    color: colors.text.secondary,
    lineHeight: 16,
  },
  actions: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  deleteButton: {
    borderLeftWidth: 1,
    borderLeftColor: colors.border,
  },
  actionText: {
    fontSize: 14,
    color: colors.primary,
    marginLeft: 6,
    fontWeight: "500",
  },
  deleteText: {
    color: "#EF4444",
  },
})

export default ShelterManagementCard
