'use';
import { ElementEnum, RarityEnum } from '@entities/constants';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class migrations1667991225370 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    /* const processes = characters.map(({element, imagePath, localeName})=>{
      return queryRunner.query(
        `INSERT INTO "characters" ("localeName", "imagePath", "element")
        VALUES ('${localeName}', '${imagePath}', '${element}');`,
      )
    })
    await Promise.all(processes) */
    const values = characters
      .map(
        (char) =>
          `('${char.localeName}', '${char.imagePath}', '${char.element}', '${char.rarity}')`,
      )
      .join(', ');
    return queryRunner.query(
      `INSERT INTO "characters" ("localeName", "imagePath", "element", "rarity")
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
}

// 1.3 characters
const characters: Array<Character> = [
  {
    localeName: 'roverSpectro',
    imagePath: '/characters/rover.webp',
    element: ElementEnum.SPECTRO,
    rarity: RarityEnum.LEGENDARY,
  },
  {
    localeName: 'roverHavoc',
    imagePath: '/characters/rover.webp',
    element: ElementEnum.HAVOC,
    rarity: RarityEnum.LEGENDARY,
  },
  {
    localeName: 'jinhsi',
    imagePath: '/characters/jinhsi.png',
    element: ElementEnum.SPECTRO,
    rarity: RarityEnum.LEGENDARY,
  },
  {
    localeName: 'xiangliYao',
    imagePath: '/characters/xiangliYao.webp',
    element: ElementEnum.ELECTRO,
    rarity: RarityEnum.LEGENDARY,
  },
  {
    localeName: 'yinlin',
    imagePath: '/characters/yinlin.webp',
    element: ElementEnum.ELECTRO,
    rarity: RarityEnum.LEGENDARY,
  },
  {
    localeName: 'changli',
    imagePath: '/characters/changli.png',
    element: ElementEnum.FUSION,
    rarity: RarityEnum.LEGENDARY,
  },
  {
    localeName: 'zhezhi',
    imagePath: '/characters/zhezhi.webp',
    element: ElementEnum.GLACIO,
    rarity: RarityEnum.LEGENDARY,
  },
  {
    localeName: 'shorekeeper',
    imagePath: '/characters/shorekeeper.webp',
    element: ElementEnum.SPECTRO,
    rarity: RarityEnum.LEGENDARY,
  },
  {
    localeName: 'jiyan',
    imagePath: '/characters/jiyan.webp',
    element: ElementEnum.AERO,
    rarity: RarityEnum.LEGENDARY,
  },
  {
    localeName: 'encore',
    imagePath: '/characters/encore.webp',
    element: ElementEnum.FUSION,
    rarity: RarityEnum.LEGENDARY,
  },
  {
    localeName: 'mortefi',
    imagePath: '/characters/mortefi.webp',
    element: ElementEnum.FUSION,
    rarity: RarityEnum.COMMON,
  },
  {
    localeName: 'sanhua',
    imagePath: '/characters/sanhua.webp',
    element: ElementEnum.GLACIO,
    rarity: RarityEnum.COMMON,
  },
  {
    localeName: 'verina',
    imagePath: '/characters/verina.webp',
    element: ElementEnum.SPECTRO,
    rarity: RarityEnum.LEGENDARY,
  },
  {
    localeName: 'jianxin',
    imagePath: '/characters/jianxin.webp',
    element: ElementEnum.AERO,
    rarity: RarityEnum.LEGENDARY,
  },
  {
    localeName: 'calcharo',
    imagePath: '/characters/calcharo.webp',
    element: ElementEnum.ELECTRO,
    rarity: RarityEnum.LEGENDARY,
  },
  {
    localeName: 'danjin',
    imagePath: '/characters/danjin.webp',
    element: ElementEnum.HAVOC,
    rarity: RarityEnum.COMMON,
  },
  {
    localeName: 'baizhi',
    imagePath: '/characters/baizhi.webp',
    element: ElementEnum.GLACIO,
    rarity: RarityEnum.COMMON,
  },
  {
    localeName: 'chixia',
    imagePath: '/characters/chixia.webp',
    element: ElementEnum.FUSION,
    rarity: RarityEnum.COMMON,
  },
  {
    localeName: 'lingyang',
    imagePath: '/characters/lingyang.webp',
    element: ElementEnum.GLACIO,
    rarity: RarityEnum.LEGENDARY,
  },
  {
    localeName: 'yuanwu',
    imagePath: '/characters/yuanwu.webp',
    element: ElementEnum.ELECTRO,
    rarity: RarityEnum.COMMON,
  },
  {
    localeName: 'aalto',
    imagePath: '/characters/aalto.webp',
    element: ElementEnum.AERO,
    rarity: RarityEnum.COMMON,
  },
  {
    localeName: 'yangyang',
    imagePath: '/characters/yangyang.webp',
    element: ElementEnum.AERO,
    rarity: RarityEnum.COMMON,
  },
  {
    localeName: 'taoqi',
    imagePath: '/characters/taoqi.webp',
    element: ElementEnum.HAVOC,
    rarity: RarityEnum.COMMON,
  },
];
