import { Addonchoice } from './addonchoice';

export class Addongroup {
  id: string;
  title: string;
  max_choices: number;
  min_choices: number;
  addon_choices: Array<Addonchoice>;
  title_translations: object;
}
