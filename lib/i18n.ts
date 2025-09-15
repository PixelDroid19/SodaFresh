export type Language = "es" | "en"

export const translations = {
  es: {
    title: "Bebidas Tradicionales",
    subtitle:
      "Vamos mucho más allá de un simple refresco; buscamos posicionar a Soda Fresh como una experiencia cultural y artística en sí misma, haciendo eco de la rica tradición artesanal de Guatemala. La bebida no solo apaga la sed, sino que también celebra la creatividad y el talento local, transformando cada botella en un objeto de colección y un homenaje a la identidad guatemalteca.",
    quote: "\"Ediciones de colección **Artistas de mi Tierra**\"",
    back: "← Regresar",
    common: {
      sections: {
        historia: "Historia",
        beneficios: "Beneficios",
      },
      benefits: {
        title: "Beneficios para la Salud",
        nutritionalValue: "Valor Nutricional",
      },
    },
    tamarindo: {
      name: "Tamarindo",
      description:
        "El sabor agridulce que conquistó México. Una bebida ancestral con propiedades medicinales y un sabor inconfundible.",
      teaser: "Los árabes fueron quienes lo llevaron a la India, donde se adaptó y se cultivó a gran escala durante siglos. De ahí su nombre científico, Tamarindus indica, que significa ‘dátil de la India’.",
      heroDescription:
        "El sabor agridulce que conquistó paladares mexicanos durante siglos. Una bebida que combina tradición, sabor y propiedades medicinales únicas.",
      historia: {
        title: "Orígenes Ancestrales",
        content: [
          "El tamarindo llegó a México en el siglo XVI, traído por los españoles desde África. Sin embargo, fue en tierras mexicanas donde encontró su verdadero hogar, adaptándose perfectamente al clima tropical.",
          "Los pueblos indígenas rápidamente adoptaron esta fruta exótica, incorporándola en sus remedios tradicionales y bebidas ceremoniales. Su sabor único, entre dulce y ácido, conquistó paladares de todas las edades.",
          "Hoy en día, el agua de tamarindo es una de las bebidas más queridas en México, presente en mercados, fondas y hogares de todo el país.",
        ],
        curiosFacts: "Datos Curiosos",
        facts: [
          "El tamarindo puede vivir hasta 200 años",
          'Su nombre proviene del árabe "tamr hindi" (dátil de la India)',
          "México es el segundo productor mundial de tamarindo",
        ],
        connection: "Conexión con Otros Sabores",
        connectionText:
          "En la tradición mexicana, el tamarindo se combina perfectamente con jamaica para crear bebidas refrescantes, y con limón para intensificar su acidez natural.",
      },
      beneficios: {
        benefits: [
          {
            title: "Digestivo Natural",
            description: "Ayuda a mejorar la digestión y alivia malestares estomacales",
          },
          {
            title: "Rico en Antioxidantes",
            description: "Combate los radicales libres y fortalece el sistema inmunológico",
          },
          {
            title: "Fuente de Vitaminas",
            description: "Contiene vitamina C, B1, B2 y minerales esenciales",
          },
        ],
        nutrition: [
          { label: "Calorías (por vaso)", value: "45 kcal" },
          { label: "Vitamina C", value: "15% VD" },
          { label: "Fibra", value: "2.8g" },
          { label: "Potasio", value: "628mg" },
        ],
      },
    },
    jamaica: {
      name: "Jamaica",
      description:
        "La flor de hibisco que da vida a celebraciones. Rica en antioxidantes y tradición, perfecta para cualquier momento especial.",
      teaser: "Aunque la mayoría de las personas la conocen por la infusión de sus cálices secos, que se usa para hacer la popular agua de Jamaica, las hojas tiernas de la planta también son comestibles.",
      heroDescription:
        "La flor de hibisco que da color y vida a las celebraciones mexicanas. Una bebida ceremonial rica en antioxidantes y tradición ancestral.",
      historia: {
        title: "La Flor Sagrada",
        content: [
          "La jamaica, conocida científicamente como Hibiscus sabdariffa, llegó a México desde África y se convirtió en parte fundamental de la cultura gastronómica nacional.",
          "En las culturas prehispánicas, las flores rojas eran consideradas sagradas y se utilizaban en ceremonias religiosas. La jamaica heredó este simbolismo, convirtiéndose en la bebida de las celebraciones.",
          "Su color rojo intenso no solo es hermoso, sino que representa la vitalidad y la pasión del pueblo mexicano, presente en fiestas, bodas y celebraciones familiares.",
        ],
        curiosFacts: "Datos Curiosos",
        facts: [
          "Se cultiva principalmente en Guerrero y Oaxaca",
          "Una flor puede producir hasta 200 semillas",
          "Es conocida como 'té rojo' en muchos países",
        ],
        connection: "Conexión con Otros Sabores",
        connectionText:
          "La jamaica se complementa perfectamente con tamarindo para crear aguas frescas complejas, y con limón para realzar su acidez natural.",
      },
      beneficios: {
        benefits: [
          {
            title: "Antioxidante Poderoso",
            description: "Rica en antocianinas que protegen contra el envejecimiento celular",
          },
          {
            title: "Regula la Presión",
            description: "Ayuda a mantener niveles saludables de presión arterial",
          },
          {
            title: "Fortalece el Corazón",
            description: "Mejora la salud cardiovascular y reduce el colesterol",
          },
        ],
        nutrition: [
          { label: "Calorías (por vaso)", value: "37 kcal" },
          { label: "Vitamina C", value: "18% VD" },
          { label: "Antocianinas", value: "Alto" },
          { label: "Hierro", value: "8% VD" },
        ],
      },
    },
    limonada: {
      name: "Limonada",
      description:
        "La frescura cítrica del verano mexicano. Una explosión de vitamina C que refresca el alma y revitaliza el espíritu.",
      teaser: "Se cree que la primera versión de la limonada se creó en la Edad Media en El Cairo, Egipto, en el siglo X, donde se vendía una bebida a base de jugo de limón y azúcar.",
      heroDescription:
        "La explosión de frescura que define el verano mexicano. Una bebida revitalizante cargada de vitamina C y energía natural.",
      historia: {
        title: "El Cítrico del Nuevo Mundo",
        content: [
          "El limón llegó a México con los conquistadores españoles en el siglo XVI, pero fue en tierras mexicanas donde encontró su expresión más refrescante en forma de limonada.",
          "Los vendedores ambulantes de aguas frescas perfeccionaron el arte de la limonada mexicana, creando la fórmula perfecta que equilibra acidez, dulzura y frescura.",
          "Hoy es la bebida por excelencia del verano mexicano, presente en cada esquina, mercado y hogar, ofreciendo alivio inmediato al calor tropical.",
        ],
        curiosFacts: "Datos Curiosos",
        facts: [
          "México produce más de 2 millones de toneladas de limón al año",
          "El limón mexicano es más pequeño pero más aromático",
          "Se consume más limonada en México que en cualquier otro país",
        ],
        connection: "Conexión con Otros Sabores",
        connectionText:
          "La limonada potencia el sabor del tamarindo y equilibra la intensidad de la jamaica, creando combinaciones refrescantes únicas.",
      },
      beneficios: {
        benefits: [
          {
            title: "Vitamina C Concentrada",
            description: "Fortalece el sistema inmunológico y mejora la absorción de hierro",
          },
          {
            title: "Hidratación Natural",
            description: "Repone electrolitos y mantiene el cuerpo hidratado",
          },
          {
            title: "Desintoxicante",
            description: "Ayuda a eliminar toxinas y mejora la función hepática",
          },
        ],
        nutrition: [
          { label: "Calorías (por vaso)", value: "22 kcal" },
          { label: "Vitamina C", value: "92% VD" },
          { label: "Potasio", value: "80mg" },
          { label: "Ácido Cítrico", value: "5.7%" },
        ],
      },
    },
  },
  en: {
    title: "Traditional Drinks",
    subtitle:
      "We go far beyond just a simple soft drink; we aim to position Soda Fresh as a cultural and artistic experience in itself, echoing the rich artisanal tradition of Guatemala. The beverage not only quenches thirst but also celebrates local creativity and talent, transforming each bottle into a collectible item and a tribute to Guatemalan identity.",
    quote: "Collector's Editions Artists of My Land",
    back: "← Back",
    clickToExplore: "Click to explore",
    common: {
      sections: {
        historia: "History",
        beneficios: "Benefits",
      },
      benefits: {
        title: "Health Benefits",
        nutritionalValue: "Nutritional Value",
      },
    },
    tamarindo: {
      name: "Tamarind",
      description:
        "The sweet and sour flavor that conquered Mexico. An ancestral drink with medicinal properties and an unmistakable taste.",
      teaser: "The Arabs were the ones who brought it to India, where it adapted and was cultivated on a large scale for centuries. Hence its scientific name, *Tamarindus indica*, which means 'date of India'.",
      heroDescription:
        "The sweet and sour flavor that conquered Mexican palates for centuries. A drink that combines tradition, flavor and unique medicinal properties.",
      historia: {
        title: "Ancestral Origins",
        content: [
          "Tamarind arrived in Mexico in the 16th century, brought by the Spanish from Africa. However, it was in Mexican lands where it found its true home, adapting perfectly to the tropical climate.",
          "Indigenous peoples quickly adopted this exotic fruit, incorporating it into their traditional remedies and ceremonial drinks. Its unique flavor, between sweet and sour, conquered palates of all ages.",
          "Today, tamarind water is one of the most beloved drinks in Mexico, present in markets, fondas and homes throughout the country.",
        ],
        curiosFacts: "Curious Facts",
        facts: [
          "Tamarind can live up to 200 years",
          'Its name comes from Arabic "tamr hindi" (date from India)',
          "Mexico is the second largest tamarind producer in the world",
        ],
        connection: "Connection with Other Flavors",
        connectionText:
          "In Mexican tradition, tamarind combines perfectly with hibiscus to create refreshing drinks, and with lime to intensify its natural acidity.",
      },
      beneficios: {
        benefits: [
          {
            title: "Natural Digestive",
            description: "Helps improve digestion and relieves stomach discomfort",
          },
          {
            title: "Rich in Antioxidants",
            description: "Fights free radicals and strengthens the immune system",
          },
          {
            title: "Source of Vitamins",
            description: "Contains vitamin C, B1, B2 and essential minerals",
          },
        ],
        nutrition: [
          { label: "Calories (per glass)", value: "45 kcal" },
          { label: "Vitamin C", value: "15% DV" },
          { label: "Fiber", value: "2.8g" },
          { label: "Potassium", value: "628mg" },
        ],
      },
    },
    jamaica: {
      name: "Hibiscus",
      description:
        "The hibiscus flower that brings celebrations to life. Rich in antioxidants and tradition, perfect for any special moment.",
      teaser: "Although most people know it for the infusion made from its dried calyces, which is used to make the popular hibiscus drink, the tender leaves of the plant are also edible.",
      heroDescription:
        "The hibiscus flower that gives color and life to Mexican celebrations. A ceremonial drink rich in antioxidants and ancestral tradition.",
      historia: {
        title: "The Sacred Flower",
        content: [
          "Hibiscus, scientifically known as Hibiscus sabdariffa, arrived in Mexico from Africa and became a fundamental part of the national gastronomic culture.",
          "In pre-Hispanic cultures, red flowers were considered sacred and used in religious ceremonies. Hibiscus inherited this symbolism, becoming the drink of celebrations.",
          "Its intense red color is not only beautiful, but represents the vitality and passion of the Mexican people, present at parties, weddings and family celebrations.",
        ],
        curiosFacts: "Curious Facts",
        facts: [
          "It is mainly cultivated in Guerrero and Oaxaca",
          "One flower can produce up to 200 seeds",
          "It is known as 'red tea' in many countries",
        ],
        connection: "Connection with Other Flavors",
        connectionText:
          "Hibiscus complements perfectly with tamarind to create complex fresh waters, and with lime to enhance its natural acidity.",
      },
      beneficios: {
        benefits: [
          {
            title: "Powerful Antioxidant",
            description: "Rich in anthocyanins that protect against cellular aging",
          },
          {
            title: "Regulates Pressure",
            description: "Helps maintain healthy blood pressure levels",
          },
          {
            title: "Strengthens the Heart",
            description: "Improves cardiovascular health and reduces cholesterol",
          },
        ],
        nutrition: [
          { label: "Calories (per glass)", value: "37 kcal" },
          { label: "Vitamin C", value: "18% DV" },
          { label: "Anthocyanins", value: "High" },
          { label: "Iron", value: "8% DV" },
        ],
      },
    },
    limonada: {
      name: "Limeade",
      description:
        "The citrus freshness of Mexican summer. An explosion of vitamin C that refreshes the soul and revitalizes the spirit.",
      teaser: "It is believed that the first version of lemonade was created in medieval Cairo, Egypt, in the 10th century, where a drink made from lemon juice and sugar was sold.",
      heroDescription:
        "The explosion of freshness that defines Mexican summer. A revitalizing drink loaded with vitamin C and natural energy.",
      historia: {
        title: "The Citrus of the New World",
        content: [
          "Lime arrived in Mexico with the Spanish conquistadors in the 16th century, but it was in Mexican lands where it found its most refreshing expression in the form of limeade.",
          "Street vendors of fresh waters perfected the art of Mexican limeade, creating the perfect formula that balances acidity, sweetness and freshness.",
          "Today it is the quintessential drink of Mexican summer, present on every corner, market and home, offering immediate relief from tropical heat.",
        ],
        curiosFacts: "Curious Facts",
        facts: [
          "Mexico produces more than 2 million tons of lime per year",
          "Mexican lime is smaller but more aromatic",
          "More limeade is consumed in Mexico than in any other country",
        ],
        connection: "Connection with Other Flavors",
        connectionText:
          "Limeade enhances the flavor of tamarind and balances the intensity of hibiscus, creating unique refreshing combinations.",
      },
      beneficios: {
        benefits: [
          {
            title: "Concentrated Vitamin C",
            description: "Strengthens the immune system and improves iron absorption",
          },
          {
            title: "Natural Hydration",
            description: "Replenishes electrolytes and keeps the body hydrated",
          },
          {
            title: "Detoxifying",
            description: "Helps eliminate toxins and improves liver function",
          },
        ],
        nutrition: [
          { label: "Calories (per glass)", value: "22 kcal" },
          { label: "Vitamin C", value: "92% DV" },
          { label: "Potassium", value: "80mg" },
          { label: "Citric Acid", value: "5.7%" },
        ],
      },
    },
  },
}

export function useTranslation(language: Language) {
  return translations[language]
}
