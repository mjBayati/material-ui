import gameDistrosEnum from '../enum/gameDistros.enum';

export default [
  {
    title: 'BASIC',
    planSpec: [
      {
        key: 'CPU',
        amount: '2',
        unit: 'vCPU',
        name: 'highend 2.9+ Ghz',
      },
      {
        key: 'Memory',
        amount: '2',
        unit: 'GB',
        name: 'DDR4 Memory',
      },
      {
        key: 'Storage',
        amount: '30',
        unit: 'GB',
        name: 'NVME/SSD Storage',
      },
      {
        key: 'Bandwidth',
        amount: '3',
        unit: 'TB',
        name: 'Bandwidth',
      },
      {
        key: 'Connection',
        amount: '10',
        unit: 'Gbps',
        name: 'Connections',
      },
    ],
    pricing: {
      perMonth: {
        unit: '$',
        price: '9.95',
        period: 'm',
      },
      billedAnnually: {
        period: 'm',
        price: '7.95',
        unit: '$',
      },
    },
    os: {
      name: gameDistrosEnum.Windows,
      icon: 'pricing-table-section/windows.png',
    },
    action: {
      remoteLink: `${process.env.GATSBY_MIDDLE_CREATE_VM_PAGE}?a=add&pid=192`,
    },
  },
  {
    title: 'PREMIUM',
    planSpec: [
      {
        key: 'CPU',
        amount: '2',
        unit: 'vCPU',
        name: 'highend 2.9+ Ghz',
      },
      {
        key: 'Memory',
        amount: '4',
        unit: 'GB',
        name: 'DDR4 Memory',
      },
      {
        key: 'Storage',
        amount: '60',
        unit: 'GB',
        name: 'NVME/SSD Storage',
      },
      {
        key: 'Bandwidth',
        amount: '5',
        unit: 'TB',
        name: 'Bandwidth',
      },
      {
        key: 'Connection',
        amount: '10',
        unit: 'Gbps',
        name: 'Connections',
      },
    ],
    pricing: {
      perMonth: {
        unit: '$',
        price: '19.95',
        period: 'm',
      },
      billedAnnually: {
        period: 'm',
        price: '14.95',
        unit: '$',
      },
    },
    os: {
      name: gameDistrosEnum.Windows,
      icon: 'pricing-table-section/windows.png',
    },
    action: {
      remoteLink: `${process.env.GATSBY_MIDDLE_CREATE_VM_PAGE}?a=add&pid=193`,
    },
  },
  {
    isSelected: true,
    title: 'BUSINESS',
    badge: 'Most Popular',
    planSpec: [
      {
        key: 'CPU',
        amount: '4',
        unit: 'vCPU',
        name: 'highend 2.9+ Ghz',
      },
      {
        key: 'Memory',
        amount: '8',
        unit: 'GB',
        name: 'DDR4 Memory',
      },
      {
        key: 'Storage',
        amount: '140',
        unit: 'GB',
        name: 'NVME/SSD Storage',
      },
      {
        key: 'Bandwidth',
        amount: '7',
        unit: 'TB',
        name: 'Bandwidth',
      },
      {
        key: 'Connection',
        amount: '10',
        unit: 'Gbps',
        name: 'Connections',
      },
    ],
    pricing: {
      perMonth: {
        unit: '$',
        price: '36.95',
        period: 'm',
      },
      billedAnnually: {
        period: 'm',
        price: '29.95',
        unit: '$',
      },
    },
    os: {
      name: gameDistrosEnum.Windows,
      icon: 'pricing-table-section/windows.png',
    },
    action: {
      remoteLink: `${process.env.GATSBY_MIDDLE_CREATE_VM_PAGE}?a=add&pid=194`,
    },
  },
  {
    title: 'ENTERPRISE',
    planSpec: [
      {
        key: 'CPU',
        amount: '6',
        unit: 'vCPU',
        name: 'highend 2.9+ Ghz',
      },
      {
        key: 'Memory',
        amount: '16',
        unit: 'GB',
        name: 'DDR4 Memory',
      },
      {
        key: 'Storage',
        amount: '250',
        unit: 'GB',
        name: 'NVME/SSD Storage',
      },
      {
        key: 'Bandwidth',
        amount: '10',
        unit: 'TB',
        name: 'Bandwidth',
      },
      {
        key: 'Connection',
        amount: '10',
        unit: 'Gbps',
        name: 'Connections',
      },
    ],
    pricing: {
      perMonth: {
        unit: '$',
        price: '69.95',
        period: 'm',
      },
      billedAnnually: {
        period: 'm',
        price: '54.95',
        unit: '$',
      },
    },
    os: {
      name: gameDistrosEnum.Windows,
      icon: 'pricing-table-section/windows.png',
    },
    action: {
      remoteLink: `${process.env.GATSBY_MIDDLE_CREATE_VM_PAGE}?a=add&pid=195`,
    },
  },
  {
    title: 'BASIC',
    planSpec: [
      {
        key: 'CPU',
        amount: '2',
        unit: 'vCPU',
        name: 'highend 2.9+ Ghz',
      },
      {
        key: 'Memory',
        amount: '2',
        unit: 'GB',
        name: 'DDR4 Memory',
      },
      {
        key: 'Storage',
        amount: '30',
        unit: 'GB',
        name: 'NVME/SSD Storage',
      },
      {
        key: 'Bandwidth',
        amount: '2',
        unit: 'TB',
        name: 'Bandwidth',
      },
      {
        key: 'Connection',
        amount: '10',
        unit: 'Gbps',
        name: 'Connections',
      },
    ],
    pricing: {
      perMonth: {
        unit: '$',
        price: '9.95',
        period: 'm',
      },
      billedAnnually: {
        period: 'm',
        price: '7.95',
        unit: '$',
      },
    },
    os: {
      name: gameDistrosEnum.Linux,
      icon: 'pricing-table-section/linux.png',
    },
    action: {
      remoteLink: `${process.env.GATSBY_MIDDLE_CREATE_VM_PAGE}?a=add&pid=198`,
    },
  },
  {
    title: 'PREMIUM',
    planSpec: [
      {
        key: 'CPU',
        amount: '2',
        unit: 'vCPU',
        name: 'highend 2.9+ Ghz',
      },
      {
        key: 'Memory',
        amount: '4',
        unit: 'GB',
        name: 'DDR4 Memory',
      },
      {
        key: 'Storage',
        amount: '60',
        unit: 'GB',
        name: 'NVME/SSD Storage',
      },
      {
        key: 'Bandwidth',
        amount: '5',
        unit: 'TB',
        name: 'Bandwidth',
      },
      {
        key: 'Connection',
        amount: '10',
        unit: 'Gbps',
        name: 'Connections',
      },
    ],
    pricing: {
      perMonth: {
        unit: '$',
        price: '19.95',
        period: 'm',
      },
      billedAnnually: {
        period: 'm',
        price: '14.95',
        unit: '$',
      },
    },
    os: {
      name: gameDistrosEnum.Linux,
      icon: 'pricing-table-section/linux.png',
    },
    action: {
      remoteLink: `${process.env.GATSBY_MIDDLE_CREATE_VM_PAGE}?a=add&pid=199`,
    },
  },
  {
    isSelected: true,
    title: 'BUSINESS',
    badge: 'Most Popular',
    planSpec: [
      {
        key: 'CPU',
        amount: '4',
        unit: 'vCPU',
        name: 'highend 2.9+ Ghz',
      },
      {
        key: 'Memory',
        amount: '8',
        unit: 'GB',
        name: 'DDR4 Memory',
      },
      {
        key: 'Storage',
        amount: '140',
        unit: 'GB',
        name: 'NVME/SSD Storage',
      },
      {
        key: 'Bandwidth',
        amount: '7',
        unit: 'TB',
        name: 'Bandwidth',
      },
      {
        key: 'Connection',
        amount: '10',
        unit: 'Gbps',
        name: 'Connections',
      },
    ],
    pricing: {
      perMonth: {
        unit: '$',
        price: '36.95',
        period: 'm',
      },
      billedAnnually: {
        period: 'm',
        price: '29.95',
        unit: '$',
      },
    },
    os: {
      name: gameDistrosEnum.Linux,
      icon: 'pricing-table-section/linux.png',
    },
    action: {
      remoteLink: `${process.env.GATSBY_MIDDLE_CREATE_VM_PAGE}?a=add&pid=200`,
    },
  },
  {
    title: 'ENTERPRISE',
    planSpec: [
      {
        key: 'CPU',
        amount: '6',
        unit: 'vCPU',
        name: 'highend 2.9+ Ghz',
      },
      {
        key: 'Memory',
        amount: '16',
        unit: 'GB',
        name: 'DDR4 Memory',
      },
      {
        key: 'Storage',
        amount: '250',
        unit: 'GB',
        name: 'NVME/SSD Storage',
      },
      {
        key: 'Bandwidth',
        amount: '10',
        unit: 'TB',
        name: 'Bandwidth',
      },
      {
        key: 'Connection',
        amount: '10',
        unit: 'Gbps',
        name: 'Connections',
      },
    ],
    pricing: {
      perMonth: {
        unit: '$',
        price: '69.95',
        period: 'm',
      },
      billedAnnually: {
        period: 'm',
        price: '54.95',
        unit: '$',
      },
    },
    os: {
      name: gameDistrosEnum.Linux,
      icon: 'pricing-table-section/linux.png',
    },
    action: {
      remoteLink: `${process.env.GATSBY_MIDDLE_CREATE_VM_PAGE}?a=add&pid=201`,
    },
  },
];
