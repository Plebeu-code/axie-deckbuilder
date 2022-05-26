export { StatusEffect } from "./StatusEffect";

export type TStatusEffect = {
  status?: Status;
  language?: string;
}

interface Status {
  buffs?: Buffs;
  debuffs?: Buffs;
  neutral?: Buffs;
}

interface Buffs {
  'pt-br'?: Ptbr[];
  'en-us'?: Ptbr[];
}

interface Ptbr {
  title: string;
  description: string;
  graphiURL?: string;
}
