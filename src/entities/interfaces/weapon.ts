import { STATS_TYPES } from './stats';

export enum WEAPON_TYPES {
  RECTIFIER = 'rectifier',
  BROAD_BLADE = 'broadBlade',
  SWORD = 'sword',
  GAUNTLETS = 'gauntlets',
  PISTOLS = 'pistols',
}

export interface IWeapon {
  id: number;
  type: WEAPON_TYPES;
  name: string;
  mainStat: STATS_TYPES;
  statValue: number;
  baseAttack: number;
  imagePath: string;
}

export interface UserWeaponType {
  id: number;
  constants: number | string;
  level: number | string;
}

export interface UserWeapon extends IWeapon {
  userData: UserWeaponType | null;
}
