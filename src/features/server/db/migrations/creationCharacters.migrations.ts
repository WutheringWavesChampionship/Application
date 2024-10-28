import { ElementEnum, RarityEnum } from '@entities/interfaces';
import { WEAPON_TYPES } from '@entities/interfaces/weapon';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class migrations1667991225370 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const values = characters
      .map(
        (char) =>
          `('${char.localeName}', '${char.imagePath}', '${char.element}', '${char.rarity}', '${char.weaponType}')`,
      )
      .join(', ');
    return queryRunner.query(
      `INSERT INTO "characters" ("localeName", "imagePath", "element", "rarity", "weaponType")
      VALUES ${values};`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM "characters"');
  }
}
interface Character {
  localeName: string;
  imagePath: string;
  element: ElementEnum;
  rarity: RarityEnum;
  weaponType: WEAPON_TYPES;
}

// 1.3 characters
const characters: Array<Character> = [
  {
    localeName: 'roverSpectro',
    imagePath: '/characters/rover.webp',
    element: ElementEnum.SPECTRO,
    rarity: RarityEnum.LEGENDARY,
    weaponType: WEAPON_TYPES.SWORD,
  },
  {
    localeName: 'roverHavoc',
    imagePath: '/characters/rover.webp',
    element: ElementEnum.HAVOC,
    rarity: RarityEnum.LEGENDARY,
    weaponType: WEAPON_TYPES.SWORD,
  },
  {
    localeName: 'jinhsi',
    imagePath: '/characters/jinhsi.png',
    element: ElementEnum.SPECTRO,
    rarity: RarityEnum.LEGENDARY,
    weaponType: WEAPON_TYPES.BROAD_BLADE,
  },
  {
    localeName: 'xiangliYao',
    imagePath: '/characters/xiangliYao.webp',
    element: ElementEnum.ELECTRO,
    rarity: RarityEnum.LEGENDARY,
    weaponType: WEAPON_TYPES.GAUNTLETS,
  },
  {
    localeName: 'yinlin',
    imagePath: '/characters/yinlin.webp',
    element: ElementEnum.ELECTRO,
    rarity: RarityEnum.LEGENDARY,
    weaponType: WEAPON_TYPES.RECTIFIER,
  },
  {
    localeName: 'changli',
    imagePath: '/characters/changli.png',
    element: ElementEnum.FUSION,
    rarity: RarityEnum.LEGENDARY,
    weaponType: WEAPON_TYPES.SWORD,
  },
  {
    localeName: 'zhezhi',
    imagePath: '/characters/zhezhi.webp',
    element: ElementEnum.GLACIO,
    rarity: RarityEnum.LEGENDARY,
    weaponType: WEAPON_TYPES.RECTIFIER,
  },
  {
    localeName: 'shorekeeper',
    imagePath: '/characters/shorekeeper.webp',
    element: ElementEnum.SPECTRO,
    rarity: RarityEnum.LEGENDARY,
    weaponType: WEAPON_TYPES.RECTIFIER,
  },
  {
    localeName: 'jiyan',
    imagePath: '/characters/jiyan.webp',
    element: ElementEnum.AERO,
    rarity: RarityEnum.LEGENDARY,
    weaponType: WEAPON_TYPES.BROAD_BLADE,
  },
  {
    localeName: 'encore',
    imagePath: '/characters/encore.webp',
    element: ElementEnum.FUSION,
    rarity: RarityEnum.LEGENDARY,
    weaponType: WEAPON_TYPES.RECTIFIER,
  },
  {
    localeName: 'mortefi',
    imagePath: '/characters/mortefi.webp',
    element: ElementEnum.FUSION,
    rarity: RarityEnum.EPIC,
    weaponType: WEAPON_TYPES.PISTOLS,
  },
  {
    localeName: 'sanhua',
    imagePath: '/characters/sanhua.webp',
    element: ElementEnum.GLACIO,
    rarity: RarityEnum.EPIC,
    weaponType: WEAPON_TYPES.SWORD,
  },
  {
    localeName: 'verina',
    imagePath: '/characters/verina.webp',
    element: ElementEnum.SPECTRO,
    rarity: RarityEnum.LEGENDARY,
    weaponType: WEAPON_TYPES.RECTIFIER,
  },
  {
    localeName: 'jianxin',
    imagePath: '/characters/jianxin.webp',
    element: ElementEnum.AERO,
    rarity: RarityEnum.LEGENDARY,
    weaponType: WEAPON_TYPES.GAUNTLETS,
  },
  {
    localeName: 'calcharo',
    imagePath: '/characters/calcharo.webp',
    element: ElementEnum.ELECTRO,
    rarity: RarityEnum.LEGENDARY,
    weaponType: WEAPON_TYPES.BROAD_BLADE,
  },
  {
    localeName: 'danjin',
    imagePath: '/characters/danjin.webp',
    element: ElementEnum.HAVOC,
    rarity: RarityEnum.EPIC,
    weaponType: WEAPON_TYPES.SWORD,
  },
  {
    localeName: 'baizhi',
    imagePath: '/characters/baizhi.webp',
    element: ElementEnum.GLACIO,
    rarity: RarityEnum.EPIC,
    weaponType: WEAPON_TYPES.RECTIFIER,
  },
  {
    localeName: 'chixia',
    imagePath: '/characters/chixia.webp',
    element: ElementEnum.FUSION,
    rarity: RarityEnum.EPIC,
    weaponType: WEAPON_TYPES.PISTOLS,
  },
  {
    localeName: 'lingyang',
    imagePath: '/characters/lingyang.webp',
    element: ElementEnum.GLACIO,
    rarity: RarityEnum.LEGENDARY,
    weaponType: WEAPON_TYPES.GAUNTLETS,
  },
  {
    localeName: 'yuanwu',
    imagePath: '/characters/yuanwu.webp',
    element: ElementEnum.ELECTRO,
    rarity: RarityEnum.EPIC,
    weaponType: WEAPON_TYPES.GAUNTLETS,
  },
  {
    localeName: 'aalto',
    imagePath: '/characters/aalto.webp',
    element: ElementEnum.AERO,
    rarity: RarityEnum.EPIC,
    weaponType: WEAPON_TYPES.PISTOLS,
  },
  {
    localeName: 'yangyang',
    imagePath: '/characters/yangyang.webp',
    element: ElementEnum.AERO,
    rarity: RarityEnum.EPIC,
    weaponType: WEAPON_TYPES.SWORD,
  },
  {
    localeName: 'taoqi',
    imagePath: '/characters/taoqi.webp',
    element: ElementEnum.HAVOC,
    rarity: RarityEnum.EPIC,
    weaponType: WEAPON_TYPES.BROAD_BLADE,
  },
];
