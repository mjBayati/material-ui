import osVariationsEnum from '../enum/osVariation.enum';
import linuxDistrosEnum from '../enum/linuxDistros.enum';
import windowsDistrosEnum from "../enum/windowsDistros.enum";
import forexDistrosEnum from '../enum/forexDistros.enum';
import gameDistrosEnum from '../enum/gameDistros.enum';
import rdpDistrosEnum from '../enum/rdpDistros.enum';
import mikrotikDistrosEnum from '../enum/mikrotikDistros.enum';
import bluestacksDistrosEnum from '../enum/bluestacksDistros.enum';
import linuxVsWindowsPricingItemsData from '../data/linuxVsWindowsPricingItems.data';
import linuxComparingPricingItemsData from '../data/linuxComparingPricingItems.data';
import windowsComparingPricingItemsData from "./windowsComparingPricingItems.data";
import forexComparingPricingItemsData from './forexComparingPricingItems.data';
import rdpComparingPricingItemsData from './rdpComparingPricingItems.data';
import gameComparingPricingItemsData from './gameComparingPricingItems.data';
import mikrotikComparingPricingItemsData from './mikrotikComparingPricingItems.data';
import bluestacksComparingPricingItemsData from './bluestacksComparingPricingItems.data';
import cloudLinuxVsWindowsPricingItemsData from './cloudLinuxVsWindowsPricingItems.data';

const PricingData = {
    WINDOWS_VS_LINUX: {
        selectors: [osVariationsEnum.Windows, osVariationsEnum.Linux],
        isTogglable: true,
        key: "WINDOWS_VS_LINUX",
        data: linuxVsWindowsPricingItemsData,
    },
    LINUX_DISTROS: {
        selectors: [linuxDistrosEnum.SuperSonicLinuxVps, linuxDistrosEnum.HyperSonicLinuxVps],
        isTogglable: true,
        key: "LINUX_DISTROS",
        data: linuxComparingPricingItemsData
    },
    WINDOWS_DISTROS: {
        selectors: [windowsDistrosEnum.SuperSonicWindowsVps, windowsDistrosEnum.HyperSonicWindowsVps],
        isTogglable: true,
        key: "WINDOWS_DISTROS",
        data: windowsComparingPricingItemsData
    },
    FOREX_DISTROS: {
        selectors: [forexDistrosEnum.SuperSonicForexVps, forexDistrosEnum.HyperSonicForexVps],
        isTogglable: true,
        key: "FOREX_DISTROS",
        data: forexComparingPricingItemsData
    },
    RDP_DISTROS: {
        selectors: [rdpDistrosEnum.SuperSonicRdpVps, rdpDistrosEnum.HyperSonicRdpVps],
        isTogglable: true,
        key: "RDP_DISTROS",
        data: rdpComparingPricingItemsData
    },
    GAME_DISTROS: {
        selectors: [gameDistrosEnum.Windows, gameDistrosEnum.Linux],
        isTogglable: true,
        key: "GAME_DISTROS",
        data: gameComparingPricingItemsData
    },
    MIKROTIK_DISTROS: {
        selectors: [mikrotikDistrosEnum.SuperSonicMikrotikVps, mikrotikDistrosEnum.HyperSonicMikrotikVps],
        isTogglable: true,
        key: "MIKROTIK_DISTROS",
        data: mikrotikComparingPricingItemsData
    },
    BLUESTACKS_DISTROS: {
        selectors: [bluestacksDistrosEnum.SuperSonicBlueStacksVps, bluestacksDistrosEnum.HyperSonicBlueStacksVps],
        isTogglable: false,
        key: "BLUESTACKS_DISTROS",
        data: bluestacksComparingPricingItemsData
    },
    CLOUD_WINDOWS_VS_LINUX: {
        selectors: [osVariationsEnum.Windows, osVariationsEnum.Linux],
        isTogglable: true,
        key: "CLOUD_WINDOWS_VS_LINUX",
        data: cloudLinuxVsWindowsPricingItemsData,
    },
}


export default PricingData;