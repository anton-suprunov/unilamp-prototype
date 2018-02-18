import sampleSize from 'lodash/samplesize';

const subTableData = [
    {
      article: "3306360",
      title: "M",
      diameter: "260mm",
      width: "107mm",
      power: "30W",
      brightness: "3000 lm",
      protection: "IP 44",
      temperature: "3500 K",
      features: ["LED"],
      downloadLink: "",
      manualLink: ""
    },
    {
      article: "3306361",
      title: "M - Eco",
      diameter: "260mm",
      width: "107mm",
      power: "30W",
      brightness: "3000 lm",
      protection: "IP 44",
      temperature: "4000 K",
      features: ["Eco"],
      downloadLink: "",
      manualLink: ""
    },
    {
      article: "3406320",
      title: "M - EcoSensor",
      diameter: "260mm",
      width: "107mm",
      power: "30W",
      brightness: "3000 lm",
      protection: "IP 44",
      temperature: "6500 K",
      features: ["Eco", "Sensor"],
      downloadLink: "",
      manualLink: ""
    },
    {
      article: "3506320",
      title: "M - Sensor",
      diameter: "260mm",
      width: "107mm",
      power: "30W",
      brightness: "3000 lm",
      protection: "IP 44",
      temperature: "2700 K",
      features: ["Sensor"],
      downloadLink: "",
      manualLink: ""
    },
  

  
    {
      article: "3306937",
      title: "L",
      diameter: "340mm",
      width: "107mm",
      power: "30W",
      brightness: "3000 lm",
      protection: "IP 44",
      temperature: "3500 K",
      features: [],
      downloadLink: "",
      manualLink: ""
    },
    {
      article: "3356335",
      title: "L - Dali",
      diameter: "340mm",
      width: "107mm",
      power: "30W",
      brightness: "3000 lm",
      protection: "IP 44",
      temperature: "4000 K",
      features: ["Dali"],
      downloadLink: "",
      manualLink: ""
    },
    {
      article: "3346320",
      title: "L - Dim",
      diameter: "340mm",
      width: "107mm",
      power: "30W",
      brightness: "3000 lm",
      protection: "IP 44",
      temperature: "4000 K",
      features: ["Dim"],
      downloadLink: "",
      manualLink: ""
    },
    {
      article: "3336320",
      title: "L - EM03",
      diameter: "340mm",
      width: "107mm",
      power: "30W",
      brightness: "3000 lm",
      protection: "IP 65",
      temperature: "5500 K",
      features: ["EM03"],
      downloadLink: "",
      manualLink: ""
    },
    {
      article: "3326320",
      title: "L - EM03 + Sensor",
      diameter: "340mm",
      width: "107mm",
      power: "30W",
      brightness: "3000 lm",
      protection: "IP 21",
      temperature: "5500 K",
      features: ["EM03", "Sensor"],
      downloadLink: "",
      manualLink: ""
    },
    {
      article: "3316320",
      title: "L - Sensor",
      diameter: "340mm",
      width: "107mm",
      power: "30W",
      brightness: "3000 lm",
      protection: "IP 20",
      temperature: "4000 K",
      features: ["Sensor"],
      downloadLink: "",
      manualLink: ""
    },
  

    {
      article: "3306337",
      title: "XL",
      diameter: "400mm",
      width: "107mm",
      power: "30W",
      brightness: "3000 lm",
      protection: "IP 44",
      temperature: "5500 K",
      features: [],
      downloadLink: "",
      manualLink: ""
    },
    {
      article: "3306335",
      title: "XL - Dali",
      diameter: "400mm",
      width: "107mm",
      power: "30W",
      brightness: "3000 lm",
      protection: "IP 44",
      temperature: "3000 K",
      features: ["Dali"],
      downloadLink: "",
      manualLink: ""
    },
    {
      article: "3706320",
      title: "XL - Dim",
      diameter: "400mm",
      width: "107mm",
      power: "30W",
      brightness: "3000 lm",
      protection: "IP 44",
      temperature: "3000 K",
      features: ["Dim"],
      downloadLink: "",
      manualLink: ""
    },
    {
      article: "3806320",
      title: "XL - EM03",
      diameter: "400mm",
      width: "107mm",
      power: "30W",
      brightness: "3000 lm",
      protection: "IP 65",
      temperature: "3000 K",
      features: ["EM03"],
      downloadLink: "",
      manualLink: ""
    },
    {
      article: "3906320",
      title: "XL - EM03 + Sensor",
      diameter: "400mm",
      width: "107mm",
      power: "30W",
      brightness: "3000 lm",
      protection: "IP 20",
      temperature: "3000 K",
      features: ["EM03", "Sensor"],
      downloadLink: "",
      manualLink: ""
    },
    {
      article: "4006320",
      title: "XL - Sensor",
      diameter: "400mm",
      width: "107mm",
      power: "30W",
      brightness: "3000 lm",
      protection: "IP 21",
      temperature: "3000 K",
      features: ["Sensor"],
      downloadLink: "",
      manualLink: ""
    }
]

const products = [
  {
    title: "NovoDisc - Static Landing",
    shortTitle: "NovoDisc",
    new: true,
    bgImage: "NovoDisc-White.png",
    subProducts: [sampleSize(subTableData, 3)]
  },
  {
    title: "NovoDisc - Interactive Landing",
    shortTitle: "NovoDisc",
    bgImage: "NovoDisc-White.png",
    subProducts: [sampleSize(subTableData, 3)]
  },
  {
    title: "Eden Eyelid",
    bgImage: "Eden-Eyelid-Black.png",
    subProducts: [sampleSize(subTableData, 3)]
  },
  {
    title: "LED Panel",
    bgImage: "NovoDisc-White.png",
    subProducts: [sampleSize(subTableData, 3)]
  },
  {
    title: "Tyfon",
    bgImage: "NovoDisc-White.png",
    subProducts: [sampleSize(subTableData, 3)]
  },


  {
    title: "Retina Maxi LED",
    bgImage: "Retina-Stripe-White.png",
    images: {
      "white": "Retina-Stripe-White.png",
      "graphite": "Retina-Stripe-Graphite.png",
      "black": "Eden-Eyelid-Black.png",
    },
    colors: [
      { title: 'White', hex: '#ffffff', },
      { title: 'Graphite', hex: '#b9b9b9', },
      { title: 'Black', hex: '#434848', },
    ],
    subProducts: [sampleSize(subTableData, 3)]
  },
  {
    title: "Retina Stripe",
    new: true,
    bgImage: "Retina-Stripe-White.png",
    images: {
      "white": "Retina-Stripe-White.png",
      "graphite": "Retina-Stripe-Graphite.png",
      "black": "Eden-Eyelid-Black.png",
    },
    colors: [
      { title: 'White', hex: '#ffffff', },
      { title: 'Graphite', hex: '#b9b9b9', },
      { title: 'Black', hex: '#434848', },
    ],
    subProducts: [sampleSize(subTableData, 3)]
  },
  {
    title: "Retina Cross",
    bgImage: "Eden-Eyelid-Black.png",
    images: {
      "white": "Retina-Stripe-White.png",
      "graphite": "Retina-Stripe-Graphite.png",
      "black": "Eden-Eyelid-Black.png",
    },
    colors: [
      { title: 'White', hex: '#ffffff', },
      { title: 'Graphite', hex: '#b9b9b9', },
      { title: 'Black', hex: '#434848', },
    ],
    subProducts: [sampleSize(subTableData, 3)]
  },
  {
    title: "Retina Eyelid LED",
    bgImage: "Eden-Eyelid-Black.png",
    images: {
      "white": "Retina-Stripe-White.png",
      "graphite": "Retina-Stripe-Graphite.png",
      "black": "Eden-Eyelid-Black.png",
    },
    colors: [
      { title: 'White', hex: '#ffffff', },
      { title: 'Graphite', hex: '#b9b9b9', },
      { title: 'Black', hex: '#434848', },
    ],
    subProducts: [sampleSize(subTableData, 3)]
  },
  {
    title: "Retina Eyelid LED",
    bgImage: "Eden-Eyelid-Black.png",
    images: {
      "white": "Retina-Stripe-White.png",
      "graphite": "Retina-Stripe-Graphite.png",
      "black": "Eden-Eyelid-Black.png",
    },
    colors: [
      { title: 'White', hex: '#ffffff', },
      { title: 'Graphite', hex: '#b9b9b9', },
      { title: 'Black', hex: '#434848', },
    ],
    subProducts: [sampleSize(subTableData, 3)]
  },


  {
    title: "Juno Soft Pro",
    bgImage: "Drift-Flat-Graphite.png",
    subProducts: [sampleSize(subTableData, 3)]
  },
  {
    title: "LED Compact (1 & 2)",
    shortTitle: "LED Compact",
    bgImage: "Drift-Flat-Silver.png",
    subProducts: [sampleSize(subTableData, 3)]
  },
  {
    title: "Ecoled",
    bgImage: "Drift-Flat-White.png",
    subProducts: [sampleSize(subTableData, 3)]
  },
  {
    title: "Ecoled Maxi",
    new: true,
    bgImage: "Drift-Flat-Graphite.png",
    subProducts: [sampleSize(subTableData, 3)]
  },
  {
    title: "Ecoled Alu",
    bgImage: "Drift-Flat-Silver.png",
    subProducts: [sampleSize(subTableData, 3)]
  },
];

export default products;