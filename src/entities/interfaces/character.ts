import { ElementEnum, RarityEnum } from "../constants";

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
    constants: number;
    level: number;
    critValue: number;
}

export interface UserCharacter extends ICharacter {
  userData: UserData | null;
}