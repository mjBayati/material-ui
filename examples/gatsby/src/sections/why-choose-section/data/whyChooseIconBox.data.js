import globalVariableRepository from '../../../repository/global-variable.repository';

export default [
  {
    icon: 'why-choose-section/Processor.svg',
    title: 'AMD EPYC™ Processors',
    description: `Powerful AMD EPYC™ processors with high 3.3Ghz turbo speed give you high performance.`,
  },
  {
    icon: 'why-choose-section/Connection.svg',
    title: '40Gbps Internet Connection',
    description:
      'All of our servers are connected to 40Gbps Internet connection. There will be no latency/slowness with your server connection.',
  },
  {
    icon: 'why-choose-section/Storage.svg',
    title: 'Super Fast Storage',
    description: `Enterprise NVMe SSD storage with much higher speed, equipped on all of our Servers.`,
  },
  {
    icon: 'why-choose-section/Payment.svg',
    title: 'Flexible Payment',
    description:
      'Pay with any method you wish! Cloudzy welcomes Bitcoin, Ethereum, Monero, as well as PayPal, Mastercard, Visa, and more.',
  },
  {
    icon: 'why-choose-section/PayLess.svg',
    title: 'Pay Less',
    description:
      "Get the best Cloud VPS for half of other provider's price with much better specifications.",
  },
  {
    icon: 'why-choose-section/Refund.svg',
    title: 'Full Refund',
    description: `We are so confident in our services that we offer a full refund within ${globalVariableRepository.MONEY_BACK_GUARANTEE.toLowerCase()} of usage if Cloudzy did not suit your needs.`,
  },
];
