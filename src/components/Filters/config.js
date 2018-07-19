export const filtersSimple = [
  {
    type: 'color',
    title: 'Color',
    list: [{
        title: 'White',
        color: '#FFFFFF'
      },
      {
        title: 'Matt White',
        color: '#FFFFFF'
      },
      {
        title: 'Silver',
        color: 'radial-gradient(circle, #FFFEFE 0%, #CACACA 100%)'
      },
      {
        title: 'Graphite',
        color: 'rgba(73,79,79,.4)'
      },
      {
        title: 'Black',
        color: '#434848'
      }
    ]
  },
  {
    type: 'functionality',
    title: 'Functionality',
    list: [{
        title: 'EM03',
        text: "EM03 - variants have built -in battery pack for 3 hours LED, with self - test function."
      },
      {
        title: 'Gyro',
        text: 'Gyro, correct your light you want. Rotate and tilt the light source in all directions so that the light can be directed to images, flowers, furniture and anything else you want to see in the light!'
      },
      {
        title: 'Sensor',
        text: 'test text'
      },
      {
        title: 'LED',
        text: 'LED is the biggest thing in light since electric light was invented.It shines for over 20 years, can be built into lamps for new designs, and uses a sliver of the energy of incandescent bulbs.'
      },
      {
        title: 'Dim',
        text: 'Here in the Nordic region, quality dimming is extremely important. We want to create moods. We have now further developed our downlights with new ballasts / LED drivers. These have now got a soft start, which allows them to be dimmed all the way down and restarted at a very low level. This is important and a feature we are proud to present in the market. This feature makes it easy to use these fixtures together with control systems, such as X - Comfort.'
      }
    ]
  },
  {
    type: 'warmth',
    title: 'Warmth',
    list: [{
        title: '2000-3000k',
        color: 'linear-gradient(90deg, #FBFFE5 0%, #F5D079 100%)',
        text: 'LED is the biggest thing in light since electric light was invented.It shines for over 20 years, can be built into lamps for new designs, and uses a sliver of the energy of incandescent bulbs. '
      },
      {
        title: '2700k',
        color: '#F5D079',
        text: 'LED is the biggest thing in light since electric light was invented.It shines for over 20 years, can be built into lamps for new designs, and uses a sliver of the energy of incandescent bulbs. '
      },
      {
        title: '3000k',
        color: '#F5E3B8',
        text: 'LED is the biggest thing in light since electric light was invented.It shines for over 20 years, can be built into lamps for new designs, and uses a sliver of the energy of incandescent bulbs. '
      },
      {
        title: '4000k',
        color: '#FBFFE5',
        text: 'LED is the biggest thing in light since electric light was invented.It shines for over 20 years, can be built into lamps for new designs, and uses a sliver of the energy of incandescent bulbs. '
      },
    ]
  },
];

export const filtersAdvanced = [{
    type: 'execution',
    title: 'Execution',
    info: 'Execution popup',
    shorter: true,
    list: [{
        title: 'Soft',
      },
      {
        title: 'Solid',
      },
    ]
  },
  {
    type: 'protection',
    title: 'Protection',
    info: 'Protection popup',
    shorter: true,
    list: [{
        title: 'IP 20',
      },
      {
        title: 'IP 21',
      },
      {
        title: 'IP 44',
      },
      {
        title: 'IP 65',
      },
    ]
  }
];

export const temps = [
  '2700 K',
  '3500 K',
  '4000 K',
  '5500 K',
  '6000 K'
];