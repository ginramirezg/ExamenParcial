import type { ObjectId } from "mongodb";

export type Persona ={
    _id: string,
    nombre: string,
    email: string,
    telefono: number,
    amigos: Persona[]
};

export type PersonaModel = {
    id: ObjectId,
    nombre: string,
    email: string,
    telefono: number,
    amigos: ObjectId[]
};