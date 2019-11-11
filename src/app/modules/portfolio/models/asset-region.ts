import { Dictionary, NumKeyDictionary } from 'src/app/shared/models/dictionary';

/**
 * Asset region codes
 * Uses bitmasks to group items into categories.
 */
export enum AssetRegion {
  Unspecified = 0,
  Custom = 255,

  Frontier = 256,
  Emerging = 512,
  Developed = 1024,

  NorthAmerica = 2048,
  SouthAmerica = 4096,
  Europe = 8192,
  Asia = 16384,
  Africa = 32768,
  Oceania = 65536,
  Pacific = Asia | Oceania,

  // 131072,

  Index = 262144,

  DevelopedNorthAmerica = NorthAmerica | Developed,
  DevelopedEurope = Europe | Developed,
  DevelopedAsia = Asia | Developed,
  DevelopedOceania = Oceania | Developed,
  DevelopedPacific = Pacific | Developed,

  EmergingSouthAmerica = SouthAmerica | Emerging,
  EmergingAfrica = Africa | Emerging,
  EmergingEurope = Europe | Emerging,
  EmergingAsia = Asia | Emerging,
  EmergingGlobal = Emerging | Asia | Africa | NorthAmerica | SouthAmerica | Africa | Europe,

  FrontierEurope = Europe | Frontier,
  FrontierAfrica = Africa | Frontier,
  FrontierAsia = Asia | Frontier,

  MSCIWorld = Index | 1,
  MSCIACWI = Index | 2,
  MSCIEmergingMarkets = Index | 3,

  USA = 1 | DevelopedNorthAmerica,
  Canada = 2 | DevelopedNorthAmerica,
  Japan = 3 | DevelopedAsia,
  UnitedKingdom = 4 | DevelopedEurope,
  France = 5 | DevelopedEurope,
  Germany = 6 | DevelopedEurope,
  Switzerland = 7 | DevelopedEurope,
  Australia = 8 | DevelopedOceania,
  HongKong = 9 | DevelopedAsia,
  Singapore = 10 | DevelopedAsia,
  NewZealand = 11 | DevelopedOceania,
  Netherlands = 12 | DevelopedEurope,

}

/**
 * Holds the weight of a region in an asset's portfolio
 */
export interface AssetRegionWeight {
  region: AssetRegion;
  weight: number;
}

/**
 * The approximate weights of each geographic location in the indexes.
   * Warning: This weights can change and should be updated from time to time
 */
export const ASSET_INDEX_REGION_ALLOCATIONS: Dictionary<AssetRegionWeight[]> = {
  [AssetRegion.MSCIEmergingMarkets]: [
    { region: AssetRegion.EmergingAsia, weight: 0.6887 },
    { region: AssetRegion.EmergingSouthAmerica, weight: 0.0988 },
    { region: AssetRegion.EmergingAfrica, weight: 0.0589 },
    { region: AssetRegion.EmergingEurope, weight: 0.0377 },
    { region: AssetRegion.Emerging, weight: 0.1159 }, // other
  ],
  [AssetRegion.MSCIACWI]: [
    { region: AssetRegion.USA, weight: 0.5364 },
    { region: AssetRegion.Canada, weight: 0.0308 },
    { region: AssetRegion.DevelopedEurope, weight: 0.2009 },
    { region: AssetRegion.DevelopedPacific, weight: 0.0916 },

    { region: AssetRegion.Developed, weight: 0.0243 }, // other
    // emerging (11.6%)
    { region: AssetRegion.EmergingAsia, weight: 0.6887 * 0.116 },
    { region: AssetRegion.EmergingSouthAmerica, weight: 0.0988 * 0.116 },
    { region: AssetRegion.EmergingAfrica, weight: 0.0589 * 0.116 },
    { region: AssetRegion.EmergingEurope, weight: 0.0377 * 0.116 },
    { region: AssetRegion.Emerging, weight: 0.1159 * 0.116 },
  ],
  [AssetRegion.MSCIWorld]: [
    { region: AssetRegion.USA, weight: 0.6251 },
    { region: AssetRegion.Japan, weight: 0.0827 },
    { region: AssetRegion.UnitedKingdom, weight: 0.0539 },
    { region: AssetRegion.France, weight: 0.0382 },
    { region: AssetRegion.Canada, weight: 0.0342 },
    { region: AssetRegion.Switzerland, weight: 0.0342 },
    { region: AssetRegion.Germany, weight: 0.0342 },
    { region: AssetRegion.Australia, weight: 0.0342 },
    { region: AssetRegion.Netherlands, weight: 0.0342 },
    { region: AssetRegion.Developed, weight: 0.0573 }, // other
  ],
};

export const ASSET_REGION_LABELS: NumKeyDictionary<string> = {
  [AssetRegion.Unspecified]: 'Unspecified',
  [AssetRegion.Custom]: 'Custom',

  [AssetRegion.Developed]: 'Developed',
  [AssetRegion.DevelopedNorthAmerica]: 'North America',
  [AssetRegion.DevelopedEurope]: 'Europe',
  [AssetRegion.DevelopedAsia]: 'Asia (Developed)',
  [AssetRegion.DevelopedPacific]: 'Pacific',
  [AssetRegion.DevelopedOceania]: 'Oceania',

  [AssetRegion.EmergingSouthAmerica]: 'Emerging South America',
  [AssetRegion.EmergingEurope]: 'Emerging Europe',
  [AssetRegion.EmergingAsia]: 'Emerging Asia',
  [AssetRegion.EmergingAfrica]: 'Emerging Africa',
  [AssetRegion.Emerging]: 'Emerging',

  [AssetRegion.FrontierEurope]: 'Frontier Europe',
  [AssetRegion.FrontierAfrica]: 'Frontier Africa',
  [AssetRegion.FrontierAsia]: 'Frontier Asia',
  [AssetRegion.Frontier]: 'Frontier',

  [AssetRegion.MSCIWorld]: 'MSCI World',
  [AssetRegion.MSCIACWI]: 'MSCI ACWI',
  [AssetRegion.MSCIEmergingMarkets]: 'MSCI Emerging Markets',

  [AssetRegion.USA]: 'USA',
  [AssetRegion.Canada]: 'Canada',
  [AssetRegion.Japan]: 'Japan',
  [AssetRegion.UnitedKingdom]: 'UnitedKingdom',
  [AssetRegion.France]: 'France',
  [AssetRegion.Germany]: 'Germany',
  [AssetRegion.Switzerland]: 'Switzerland',
  [AssetRegion.Australia]: 'Australia',
  [AssetRegion.HongKong]: 'HongKong',
  [AssetRegion.Singapore]: 'Singapore',
  [AssetRegion.NewZealand]: 'NewZealand',
  [AssetRegion.Netherlands]: 'Netherlands',
};

export class AssetRegionHelper {
  static isIndex(regionCode: number) {
    return (regionCode & AssetRegion.Index) === AssetRegion.Index;
  }

  static getGeographicRegion(regionCode: number): AssetRegion {
    return regionCode & (
      AssetRegion.NorthAmerica |
      AssetRegion.SouthAmerica |
      AssetRegion.Europe |
      AssetRegion.Asia |
      AssetRegion.Africa |
      AssetRegion.Oceania
    );
  }

  static getDevelopmentState(regionCode: number): AssetRegion {
    return regionCode & (
      AssetRegion.Frontier |
      AssetRegion.Emerging |
      AssetRegion.Developed
    );
  }

  static getClassificationRegion(regionCode: number): AssetRegion {
    return regionCode & (
      AssetRegion.NorthAmerica |
      AssetRegion.SouthAmerica |
      AssetRegion.Europe |
      AssetRegion.Asia |
      AssetRegion.Africa |
      AssetRegion.Oceania |
      AssetRegion.Frontier |
      AssetRegion.Emerging |
      AssetRegion.Developed
    );
  }

}
