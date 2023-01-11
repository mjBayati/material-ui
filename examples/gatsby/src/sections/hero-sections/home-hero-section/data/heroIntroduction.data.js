import globalVariableRepository from '../../../../repository/global-variable.repository';

export default {
  title: `The Best Cloud VPS Since 2008!`,
  description: `Instantly create High-Performance Cloud VPS services worldwide with NVMe SSD storage and 10Gbps connections at a fraction of cost.`,
  action: {
    actionText: `starting from ${globalVariableRepository.STARTING_PRICE}`,
    sectionId: 'pricing',
  },
};
