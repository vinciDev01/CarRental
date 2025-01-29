import { Marque } from "./marque";
import { Model } from "./model";
import { Type } from './type';

export interface Car {
  nom: String;
  prixParJour: number;
  marque: Marque;
  model: Model;
  type: Type;
  anneefabrication: Date;
  disponibilite: boolean;
}
