import { Modele } from "./modele";
import { Type } from "./type";

export interface Voiture {
    modele :Modele;
    type :Type;
    immatriculation:string;
    disponibilite :Boolean;
    id:string;
    anneeFabrication:Date;
    prixParJour :number;    
}
