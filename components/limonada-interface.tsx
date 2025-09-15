"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { useTranslation, type Language } from "@/lib/i18n"
import LimonadaPng from "../asserts/limonada/limonada.png"

interface LimonadaInterfaceProps {
  language: Language
}

export default function LimonadaInterface({ language }: LimonadaInterfaceProps) {
  const [activeSection, setActiveSection] = useState("historia")
  const t = useTranslation(language)

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-lime-50 to-yellow-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[60vh]" style={{backgroundImage: `url(${LimonadaPng.src})`}}>
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

      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex space-x-8">
            {[
              { id: "historia", label: t.common.sections.historia },
              { id: "beneficios", label: t.common.sections.beneficios },
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`py-4 px-2 border-b-2 transition-colors ${
                  activeSection === section.id
                    ? "border-yellow-500 text-yellow-600"
                    : "border-transparent text-muted-foreground hover:text-yellow-600"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-16">
        {activeSection === "historia" && (
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 bg-gradient-to-br from-yellow-50 to-lime-50 border-yellow-200">
              <h2 className="text-3xl font-bold text-yellow-800 mb-6">{t.limonada.historia.title}</h2>
              <div className="space-y-4 text-yellow-700 leading-relaxed">
                {t.limonada.historia.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 bg-white border-yellow-100">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">{t.limonada.historia.curiosFacts}</h3>
                <ul className="space-y-3 text-yellow-700">
                  {t.limonada.historia.facts.map((fact, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="flex-1">{fact}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-orange-50 to-red-50 border-yellow-100">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">{t.limonada.historia.connection}</h3>
                <p className="text-yellow-700 text-sm leading-relaxed">{t.limonada.historia.connectionText}</p>
              </Card>
            </div>
          </div>
        )}

        {activeSection === "beneficios" && (
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 bg-gradient-to-br from-green-50 to-yellow-50 border-green-200">
              <h2 className="text-3xl font-bold text-yellow-800 mb-6">{t.common.benefits.title}</h2>
              <div className="space-y-4">
                {t.limonada.beneficios.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-800">{benefit.title}</h4>
                      <p className="text-sm text-yellow-700">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-white border-yellow-100">
              <h2 className="text-3xl font-bold text-yellow-800 mb-6">{t.common.benefits.nutritionalValue}</h2>
              <div className="space-y-4">
                {t.limonada.beneficios.nutrition.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-yellow-100">
                    <span className="text-yellow-700">{item.label}</span>
                    <span className="font-semibold text-yellow-800">{item.value}</span>
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
