import bluestacksDistrosEnum from '../enum/bluestacksDistros.enum';
import forexDistrosEnum from '../enum/forexDistros.enum';
import gameDistrosEnum from '../enum/gameDistros.enum';
import windowsDistrosEnum from '../enum/windowsDistros.enum';
import linuxDistrosEnum from '../enum/linuxDistros.enum';
import rdpDistrosEnum from '../enum/rdpDistros.enum';
import osVariationEnum from '../enum/osVariation.enum';
import mikrotikDistrosEnum from '../enum/mikrotikDistros.enum';

const mapping = {
  [bluestacksDistrosEnum.HyperSonicBlueStacksVps]: osVariationEnum.Windows,
  [bluestacksDistrosEnum.SuperSonicBlueStacksVps]: osVariationEnum.Windows,

  [forexDistrosEnum.HyperSonicForexVps]: osVariationEnum.Windows,
  [forexDistrosEnum.SuperSonicForexVps]: osVariationEnum.Windows,

  [gameDistrosEnum.Linux]: osVariationEnum.Linux,
  [gameDistrosEnum.Windows]: osVariationEnum.Windows,

  [windowsDistrosEnum.HyperSonicWindowsVps]: osVariationEnum.Windows,
  [windowsDistrosEnum.SuperSonicWindowsVps]: osVariationEnum.Windows,

  [linuxDistrosEnum.SuperSonicLinuxVps]: osVariationEnum.Linux,
  [linuxDistrosEnum.HyperSonicLinuxVps]: osVariationEnum.Linux,

  [rdpDistrosEnum.SuperSonicRdpVps]: osVariationEnum.Windows,
  [rdpDistrosEnum.HyperSonicRdpVps]: osVariationEnum.Windows,

  [mikrotikDistrosEnum.HyperSonicMikrotikVps]: osVariationEnum.RouterOs,
  [mikrotikDistrosEnum.SuperSonicMikrotikVps]: osVariationEnum.RouterOs,

  [osVariationEnum.Windows]: osVariationEnum.Windows,
  [osVariationEnum.Linux]: osVariationEnum.Linux
};

export default {
  getOsByDistro(distroItem) {
    return mapping[distroItem];
  },
};
