import { ElementEnum, RarityEnum } from '../constants';

export interface ICharacter {
  localeName: string;
  imagePath: string;
  element: ElementEnum;
  rarity: RarityEnum;
  id: number;
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
