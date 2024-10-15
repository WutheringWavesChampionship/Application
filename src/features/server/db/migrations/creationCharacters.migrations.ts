'use'
import { ElementEnum } from '@entities/constants';
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
   const values = characters.map(char => `('${char.localeName}', '${char.imagePath}', '${char.element}')`).join(', ')
    return queryRunner.query(
      `INSERT INTO "characters" ("localeName", "imagePath", "element")
      VALUES ${values};`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM "characters"');
  }
}
interface Character {
  localeName: string;
  imagePath: string;
  element: ElementEnum;
}

// 1.3 characters
const characters: Array<Character> = [
  {
    localeName: 'roverSpectro',
    imagePath: '/characters/rover',
    element: ElementEnum.SPECTRO,
  },
  {
    localeName: 'roverHavoc',
    imagePath: '/characters/rover',
    element: ElementEnum.HAVOC,
  },
  {
    localeName: 'jinhsi',
    imagePath: '/characters/jinhsi',
    element: ElementEnum.SPECTRO,
  },
  {
    localeName: 'xiangliYao',
    imagePath: '/characters/xiangliYao',
    element: ElementEnum.ELECTRO,
  },
  {
    localeName: 'yinlin',
    imagePath: '/characters/yinlin',
    element: ElementEnum.ELECTRO,
  },
  {
    localeName: 'changli',
    imagePath: '/characters/changli',
    element: ElementEnum.FUSION,
  },
  {
    localeName: 'zhezhi',
    imagePath: '/characters/zhezhi',
    element: ElementEnum.GLACIO,
  },
  {
    localeName: 'shorekeeper',
    imagePath: '/characters/shorekeeper',
    element: ElementEnum.SPECTRO,
  },
  {
    localeName: 'jiyan',
    imagePath: '/characters/jiyan',
    element: ElementEnum.AERO,
  },
  {
    localeName: 'encore',
    imagePath: '/characters/encore',
    element: ElementEnum.FUSION,
  },
  {
    localeName: 'mortefi',
    imagePath: '/characters/mortefi',
    element: ElementEnum.FUSION,
  },
  {
    localeName: 'sanhua',
    imagePath: '/characters/sanhua',
    element: ElementEnum.GLACIO,
  },
  {
    localeName: 'verina',
    imagePath: '/characters/verina',
    element: ElementEnum.SPECTRO,
  },
  {
    localeName: 'jianxin',
    imagePath: '/characters/jianxin',
    element: ElementEnum.AERO,
  },
  {
    localeName: 'calcharo',
    imagePath: '/characters/calcharo',
    element: ElementEnum.ELECTRO,
  },
  {
    localeName: 'danjin',
    imagePath: '/characters/danjin',
    element: ElementEnum.HAVOC,
  },
  {
    localeName: 'baizhi',
    imagePath: '/characters/baizhi',
    element: ElementEnum.GLACIO,
  },
  {
    localeName: 'chixia',
    imagePath: '/characters/chixia',
    element: ElementEnum.FUSION,
  },
  {
    localeName: 'lingyang',
    imagePath: '/characters/lingyang',
    element: ElementEnum.GLACIO,
  },
  {
    localeName: 'yuanwu',
    imagePath: '/characters/yuanwu',
    element: ElementEnum.ELECTRO,
  },
  {
    localeName: 'aalto',
    imagePath: '/characters/aalto',
    element: ElementEnum.AERO,
  },
  {
    localeName: 'yangyang',
    imagePath: '/characters/yangyang',
    element: ElementEnum.AERO,
  },
  {
    localeName: 'taoqi',
    imagePath: '/characters/taoqi',
    element: ElementEnum.HAVOC,
  },
]
