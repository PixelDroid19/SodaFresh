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
        title: "Historia",
        content: [
          "Déjate envolver por la esencia de nuestra tierra con Soda Fresh® Tamarindo. Cada gota de esta bebida captura el sabor auténtico del tamarindo, una fruta que ha sido parte de la tradición guatemalteca por generaciones. Inspirada en la rica cultura de los tejidos y el arte local, nuestra bebida es un tributo a las manos que con destreza y pasión tejen cada historia.",
          "El diseño de nuestro empaque refleja la belleza de los textiles tradicionales de Guatemala, con patrones que evocan los huipiles y las figuras que honran nuestra herencia. No es solo una bebida, es una experiencia que celebra lo natural y lo artesanal.",
        ],
        curiosFacts: "Datos Curiosos",
        facts: [
          "El tamarindo es una fruta que crece en una vaina y la pulpa es la parte que se utiliza para hacer la bebida.",
          "Su sabor cambia dependiendo de la madurez: la pulpa de la fruta más madura es más dulce, mientras que la menos madura es más ácida.",
        ],
        connection: "Conexiones",
        connectionText:
          "El tamarindo se mezcla muy bien con otras frutas, como el mango, la piña y la guayaba, creando bebidas y postres con capas de sabor complejas y vibrantes.",
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
        title: "Historia",
        content: [
          "Déjate seducir por el sabor de Soda Fresh® Jamaica, una bebida que captura la esencia de las flores de hibisco que han florecido en nuestra tierra por generaciones. Cada sorbo es un viaje a lo natural y a lo artesanal, un tributo a la rica herencia cultural de Guatemala que se entrelaza en cada detalle de nuestro diseño.",
          "El empaque de Soda Fresh® Jamaica rinde homenaje a la técnica del telar de cintura, un arte ancestral de las comunidades mayas. Las figuras y patrones geométricos en el fondo evocan los huipiles, prendas tradicionales que son un lenguaje visual de la identidad y la historia de nuestros pueblos.",
        ],
        curiosFacts: "Datos Curiosos",
        facts: [
          "Lo que utilizamos para la bebida no son los pétalos de la flor en sí, sino los cálices, que son las partes carnosas y rojas que sostienen la base de la flor. Estos cálices se cosechan después de que los pétalos caen.",
          "La flor de Jamaica es originaria de África oriental. Fue traída al continente americano durante la época colonial, probablemente por los esclavos, y se adaptó maravillosamente al clima tropical.",
        ],
        connection: "Conexiones",
        connectionText:
          "La infusión de jamaica es muy utilizada para preparar aguas frescas, pero también es la base de muchos cocteles. Su color intenso y sabor único la hacen ideal para mezclar con ron, vodka o incluso para crear alternativas sin alcohol.",
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
        title: "History",
        content: [
          "Let yourself be enveloped by the essence of our land with Soda Fresh® Tamarind. Each drop of this beverage captures the authentic flavor of tamarind, a fruit that has been part of Guatemalan tradition for generations. Inspired by the rich culture of textiles and local art, our beverage is a tribute to the hands that skillfully and passionately weave each story.",
          "The design of our packaging reflects the beauty of Guatemala's traditional textiles, with patterns that evoke huipiles and figures that honor our heritage. It's not just a beverage, it's an experience that celebrates the natural and artisanal.",
        ],
        curiosFacts: "Curious Facts",
        facts: [
          "Tamarind is a fruit that grows in a pod and the pulp is the part used to make the beverage.",
          "Its flavor changes depending on ripeness: the pulp of riper fruit is sweeter, while less ripe fruit is more acidic.",
        ],
        connection: "Connections",
        connectionText:
          "Tamarind blends very well with other fruits, such as mango, pineapple and guava, creating beverages and desserts with complex and vibrant flavor layers.",
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
        title: "History",
        content: [
          "Let yourself be seduced by the flavor of Soda Fresh® Jamaica, a beverage that captures the essence of hibiscus flowers that have bloomed in our land for generations. Each sip is a journey to the natural and artisanal, a tribute to the rich cultural heritage of Guatemala that is woven into every detail of our design.",
          "The packaging of Soda Fresh® Jamaica pays homage to the backstrap loom technique, an ancestral art of Mayan communities. The geometric figures and patterns in the background evoke huipiles, traditional garments that are a visual language of the identity and history of our peoples.",
        ],
        curiosFacts: "Curious Facts",
        facts: [
          "What we use for the beverage are not the flower petals themselves, but the calyces, which are the fleshy, red parts that support the base of the flower. These calyces are harvested after the petals fall.",
          "The Jamaica flower is native to eastern Africa. It was brought to the American continent during colonial times, probably by slaves, and adapted wonderfully to the tropical climate.",
        ],
        connection: "Connections",
        connectionText:
          "Jamaica infusion is widely used to prepare fresh waters, but it is also the base for many cocktails. Its intense color and unique flavor make it ideal for mixing with rum, vodka or even for creating non-alcoholic alternatives.",
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
