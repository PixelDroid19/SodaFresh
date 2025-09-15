"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { useTranslation } from "@/lib/i18n"
import { useAppStore } from "@/lib/store"
import TamarindoPng from "../asserts/tamarindo/tamarindo.jpg"

export default function TamarindoInterface() {
  const [activeSection, setActiveSection] = useState("historia")
  const { language } = useAppStore()
  const t = useTranslation(language)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
      <div className="relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[60vh]" style={{backgroundImage: `url(${TamarindoPng.src})`}}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 sm:px-8 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">



          </div>
        </div>
      </div>

      <div className="bg-white/95 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <nav className="flex space-x-8" role="tablist">
            {[
              { id: "historia", label: t.common.sections.historia },
              { id: "beneficios", label: t.common.sections.beneficios },
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                role="tab"
                aria-selected={activeSection === section.id}
                className={`flex items-center space-x-2 py-4 px-2 border-b-3 transition-all duration-300 font-medium ${
                  activeSection === section.id
                    ? "border-orange-500 text-orange-600 bg-orange-50/50"
                    : "border-transparent text-slate-600 hover:text-orange-600 hover:border-orange-200"
                }`}
              >
                <span>{section.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 sm:px-8 sm:py-20">
        {activeSection === "historia" && (
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <Card className="p-8 sm:p-10 bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/60 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-orange-800">{t.tamarindo.historia.title}</h2>
              </div>

              <div className="space-y-6 text-orange-700 leading-relaxed">
                {t.tamarindo.historia.content.map((paragraph, index) => (
                  <p key={index} className="text-base sm:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>

            <div className="space-y-8">
              <Card className="p-6 sm:p-8 bg-white/80 backdrop-blur-sm border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-orange-800">
                    {t.tamarindo.historia.curiosFacts}
                  </h3>
                </div>

                <ul className="space-y-4 text-orange-700">
                  {t.tamarindo.historia.facts.map((fact, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-sm sm:text-base leading-relaxed">{fact}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 sm:p-8 bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-orange-800">
                    {t.tamarindo.historia.connection}
                  </h3>
                </div>

                <p className="text-orange-700 text-sm sm:text-base leading-relaxed">
                  {t.tamarindo.historia.connectionText}
                </p>
              </Card>
            </div>
          </div>
        )}

        {activeSection === "beneficios" && (
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <Card className="p-8 sm:p-10 bg-gradient-to-br from-green-50 to-orange-50 border-green-200/60 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-orange-800">{t.common.benefits.title}</h2>
              </div>

              <div className="space-y-6">
                {t.tamarindo.beneficios.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white/60 rounded-xl border border-green-100 hover:bg-white/80 transition-colors duration-200"
                  >
                    <div>
                      <h4 className="font-semibold text-orange-800 text-base sm:text-lg mb-2">{benefit.title}</h4>
                      <p className="text-sm sm:text-base text-orange-700 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 sm:p-10 bg-white/90 backdrop-blur-sm border-orange-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-orange-800">{t.common.benefits.nutritionalValue}</h2>
              </div>

              <div className="space-y-4">
                {t.tamarindo.beneficios.nutrition.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-4 px-4 bg-orange-50/50 rounded-lg border-b border-orange-100 hover:bg-orange-50 transition-colors duration-200"
                  >
                    <span className="text-orange-700 font-medium text-sm sm:text-base">{item.label}</span>
                    <span className="font-bold text-orange-800 text-sm sm:text-base">{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
