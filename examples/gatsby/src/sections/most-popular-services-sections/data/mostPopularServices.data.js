import globalVariableRepository from '../../../repository/global-variable.repository';

const data = [
  {
    serviceName: 'Windows',
    serviceIcon: 'most-popular-services/window.inline.svg',
    serviceDescriptionContent: {
      title: 'Efficient Windows Cloud VPS Hosting Solutions',
      description: `Want Free Windows with That? Cloudzy’s cost-effective and powerful Windows VPS plans come with whatever Windows version you want, like Windows 10, or Windows Server 2019 — for FREE.`,
      action: {
        content: 'See Windows Cloud VPS Plans',
        link: '/windows-vps/',
      },
    },
  },
  {
    serviceName: 'Linux',
    serviceIcon: 'most-popular-services/linux.inline.svg',
    serviceDescriptionContent: {
      title: 'Affordable, High-Performance Linux Cloud VPS Solutions',
      description:
        'Get your KVM-powered Linux Cloud VPS with the Linux distro of your choice installed at no extra charge. Supercharge your services with state-of-the-art infrastructure, ultra-fast connection, and SSD storage at affordable prices﹣and we mean really affordable.',
      action: {
        content: 'See Linux Cloud VPS Plans',
        link: '/linux-vps/',
      },
    },
  },
  {
    serviceName: 'RDP',
    serviceIcon: 'most-popular-services/rdp.inline.svg',
    serviceDescriptionContent: {
      title: 'Easy and Reliable Remote Desktop Solutions',
      description:
        'Want to launch your own Windows-powered remote desktop at a location of your choice? Buy one of our RDP Server Plans and get full root access to secure, stable, and easy-to-use RDP servers. Connect to your Remote Desktop wherever you are using your favorite RDP software. Did we mention the free Windows?',
      action: {
        content: 'See RDP Cloud VPS Plans',
        link: '/buy-rdp/',
      },
    },
  },
  {
    serviceName: 'Forex',
    serviceIcon: 'most-popular-services/forex.inline.svg',
    serviceDescriptionContent: {
      title: 'Lightning-Fast, Minimal-Latency Forex Cloud VPS Solutions',
      description: `Hypersonic Cloud VPS hosting tailor-made for automated Forex trading. Minimize latency and get your Forex Cloud VPS as close to your broker as possible. Maximize your profits using our precision-engineered Forex Cloud VPS plans running on high-tech infrastructure at ${globalVariableRepository.NUMBER_OF_LOCATIONS} strategic locations across the globe.`,
      action: {
        content: 'See Forex Cloud VPS Plans',
        link: '/forex-vps/',
      },
    },
  },
];



export default data;