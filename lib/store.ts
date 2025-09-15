import React from 'react'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Language } from './i18n'

// Función para detectar el idioma del sistema
function detectSystemLanguage(): Language {
  if (typeof window === 'undefined') return 'es'
  
  const browserLang = navigator.language || navigator.languages?.[0] || 'es'
  return browserLang.startsWith('en') ? 'en' : 'es'
}

interface AppState {
  // Estado del idioma
  language: Language
  setLanguage: (language: Language) => void
  
  // Estado de navegación
  selectedBeverage: string | null
  setSelectedBeverage: (beverage: string | null) => void
  
  // Función para resetear a la página principal
  goToHome: () => void
  
  // Función para inicializar el idioma del sistema
  initializeLanguage: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Estado inicial
      language: 'es',
      selectedBeverage: null,
      
      // Acciones para idioma
      setLanguage: (language: Language) => {
        set({ language })
      },
      
      // Acciones para navegación
      setSelectedBeverage: (beverage: string | null) => {
        set({ selectedBeverage: beverage })
      },
      
      goToHome: () => {
        set({ selectedBeverage: null })
      },
      
      // Inicializar idioma del sistema si no hay uno guardado
      initializeLanguage: () => {
        const currentLanguage = get().language
        // Solo detectar idioma del sistema si no hay uno guardado previamente
        if (currentLanguage === 'es' && typeof window !== 'undefined') {
          const storedData = localStorage.getItem('app-storage')
          if (!storedData) {
            const systemLanguage = detectSystemLanguage()
            set({ language: systemLanguage })
          }
        }
      },
    }),
    {
      name: 'app-storage', // nombre único para localStorage
      storage: createJSONStorage(() => localStorage),
      // Solo persistir idioma y página seleccionada
      partialize: (state) => ({
        language: state.language,
        selectedBeverage: state.selectedBeverage,
      }),
    }
  )
)

// Hook personalizado para usar el store con inicialización automática
export function useAppStoreWithInit() {
  const store = useAppStore()
  
  // Inicializar idioma del sistema en el primer render
  React.useEffect(() => {
    store.initializeLanguage()
  }, [])
  
  return store
}