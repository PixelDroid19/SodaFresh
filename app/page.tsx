"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import TamarindoInterface from "@/components/tamarindo-interface";
import JamaicaInterface from "@/components/jamaica-interface";
import LimonadaInterface from "@/components/limonada-interface";
import { BeverageCard } from "@/components/beverage-card";
import { useTranslation, type Language } from "@/lib/i18n";
import { useAppStore } from "@/lib/store";
import ReactMarkdown from "react-markdown";
import TamarindPng from "../asserts/img/tamarindo.png";
import JamaicaPng from "../asserts/img/jamaica.png";
import LimonadaPng from "../asserts/img/limonada.png";
import Logo from "../asserts/img/logo.png";

export default function HomePage() {
  const { 
    language, 
    setLanguage, 
    selectedBeverage, 
    setSelectedBeverage, 
    goToHome,
    initializeLanguage 
  } = useAppStore();
  
  const t = useTranslation(language);
  
  // Inicializar idioma del sistema en el primer render
  useEffect(() => {
    initializeLanguage();
  }, [initializeLanguage]);

  if (selectedBeverage) {
    return (
      <div className="min-h-screen">
        <Button
          onClick={goToHome}
          className="fixed top-6 left-6 z-50 bg-white/95 backdrop-blur-sm text-foreground hover:bg-white border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
          aria-label={t.back}
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {t.back}
        </Button>

        {selectedBeverage === "tamarindo" && (
          <TamarindoInterface />
        )}
        {selectedBeverage === "jamaica" && (
          <JamaicaInterface />
        )}
        {selectedBeverage === "limonada" && (
          <LimonadaInterface />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50">
        <img 
          src={Logo.src} 
          alt="Logo Bebidas Artesanales" 
          className="w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain"
        />
      </div>
      <div className="fixed top-6 right-6 z-50 flex gap-2">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-1 shadow-lg border border-white/20">
          <Button
            variant={language === "es" ? "default" : "ghost"}
            size="sm"
            onClick={() => setLanguage("es")}
            className={
              language === "es"
                ? "bg-slate-800 text-white hover:bg-slate-700 shadow-sm"
                : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            }
            aria-label="Cambiar a español"
          >
            ES
          </Button>
          <Button
            variant={language === "en" ? "default" : "ghost"}
            size="sm"
            onClick={() => setLanguage("en")}
            className={
              language === "en"
                ? "bg-slate-800 text-white hover:bg-slate-700 shadow-sm"
                : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            }
            aria-label="Switch to English"
          >
            EN
          </Button>
        </div>
      </div>

      <div className="px-6 py-12 sm:px-8 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance mb-8 leading-tight" style={{color: '#087abc'}}>
              {t.title}
            </h1>
            <p className="text-xl sm:text-1xl text-slate-600 max-w-6xl mx-auto text-pretty leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <BeverageCard
              beverage={t.tamarindo}
              beverageKey="tamarindo"
              image={TamarindPng}
              background="linear-gradient(90deg, #dab2b0, #ffffff)"
              borderColor="border-pink-200/60"
              textColor="text-[#2c1a1c]"
              hoverTextColor="group-hover:text-[#2c1a1c]"
              teaserColor="text-[#2c1a1c]"
              hoverOverlayFrom="from-pink-400/10"
              hoverOverlayTo="to-pink-500/15"
              onClick={() => setSelectedBeverage("tamarindo")}
            />

            <BeverageCard
              beverage={t.jamaica}
              beverageKey="jamaica"
              image={JamaicaPng}
              background="linear-gradient(90deg, #b070ab, #ffffff)"
              borderColor="border-purple-200/60"
              textColor="text-[#89255b]"
              hoverTextColor="group-hover:text-[#89255b]"
              teaserColor="text-[#89255b]"
              hoverOverlayFrom="from-purple-400/10"
              hoverOverlayTo="to-purple-500/15"
              onClick={() => setSelectedBeverage("jamaica")}
            />

            <BeverageCard
              beverage={t.limonada}
              beverageKey="limonada"
              image={LimonadaPng}
              background="linear-gradient(90deg, #f39ea1, #ffffff)"
              borderColor="border-pink-200/60"
              textColor="text-[#e55251]"
              hoverTextColor="group-hover:text-[#e55251]"
              teaserColor="text-[#e55251]"
              hoverOverlayFrom="from-pink-500/8"
              hoverOverlayTo="to-pink-600/12"
              additionalClasses="sm:col-span-2 lg:col-span-1"
              onClick={() => setSelectedBeverage("limonada")}
            />
          </div>

          <div className="text-center mt-24">
            <div className="max-w-2xl mx-auto">
              <blockquote className="text-lg sm:text-xl text-slate-600 italic leading-relaxed mb-4">
                <ReactMarkdown>{t.quote}</ReactMarkdown>
              </blockquote>
              <div className="w-16 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
