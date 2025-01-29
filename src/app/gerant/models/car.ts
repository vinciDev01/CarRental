import { Marque } from "./marque";
import { Model } from "./model";
import { Type } from './type';

export interface Car {

    nom :String;
    prix :number;
    marque :Marque;
    model :Model;
    type :Type;
    annee : Date;
    couleur :String;
    nombreDePassager :number;
    disponibilite :boolean;

}
