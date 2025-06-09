const API_BASE_URL = "http://localhost:5160" // Substitua pela URL real da API

export interface Abrigo {
  id: number
  usuarioId: number
  nome: string
  descricao: string
  endereco: string
  cidade: string
  estado: string
  cep: string
  latitude: number
  longitude: number
  capacidade: number
  ocupacaoAtual: number
  status: string
  criadoEm: string
  usuario?: {
    id: number
    nome: string
    email: string
  }
}

export interface WeatherData {
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    humidity: number
  }
  weather: Array<{
    main: string
    description: string
    icon: string
  }>
  name: string
}

export interface CreateAbrigoData {
  nome: string
  descricao: string
  endereco: string
  cidade: string
  estado: string
  cep: string
  capacidade: number
  ocupacaoAtual: number
  status: string
  usuarioId: number
  latitude: number
  longitude: number
}

class ApiService {
  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`)
    }

    return response.json()
  }

  // Weather API
  async getWeather(city = "São Paulo"): Promise<WeatherData> {
    return this.request<WeatherData>(`/Home/Index?city=${city}`)
  }

  // Abrigos API
  async getAbrigos(): Promise<Abrigo[]> {
    return this.request<Abrigo[]>("/api/Abrigos")
  }

  async getAbrigoById(id: number): Promise<Abrigo> {
    return this.request<Abrigo>(`/api/Abrigos/${id}`)
  }

  async createAbrigo(data: CreateAbrigoData): Promise<Abrigo> {
    return this.request<Abrigo>("/api/Abrigos", {
      method: "POST",
      body: JSON.stringify(data),
    })
  }

  async updateAbrigo(id: number, data: Partial<CreateAbrigoData>): Promise<Abrigo> {
    return this.request<Abrigo>(`/api/Abrigos/${id}`, {
      method: "PUT",
      body: JSON.stringify({ id, ...data }),
    })
  }

  async deleteAbrigo(id: number): Promise<void> {
    return this.request<void>(`/api/Abrigos/${id}`, {
      method: "DELETE",
    })
  }

  // Get user's shelters
  async getUserAbrigos(usuarioId: number): Promise<Abrigo[]> {
    const allAbrigos = await this.getAbrigos()
    return allAbrigos.filter((abrigo) => abrigo.usuarioId === usuarioId)
  }
}

export const apiService = new ApiService()
