import { RarityEnum } from './rarity';
import { WEAPON_TYPES } from './weapon';

export interface ICharacter {
  localeName: string;
  imagePath: string;
  element: ElementEnum;
  rarity: RarityEnum;
  id: number;
  weaponType: WEAPON_TYPES;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserData {
  id: number;
  constants: number | string;
  level: number | string;
  critValue?: number | string;
}

export interface UserCharacter extends ICharacter {
  userData: UserData | null;
}

export enum ElementEnum {
  SPECTRO = 'spectro',
  HAVOC = 'havoc',
  AERO = 'aero',
  GLACIO = 'glacio',
  FUSION = 'fusion',
  ELECTRO = 'electro',
}
