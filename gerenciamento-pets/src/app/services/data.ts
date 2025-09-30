
import { Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  doc,
  collectionData,
  docData,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Pet {
  id?: string;
  name: string;
  species: string;
  race: string;
  age: number;
  observations: string;
  createdAt?: number;
}

export interface Carer {
  id?: string;
  name: string;
  phoneNumber: number;
  experience: number;
  specialties: string;
  createdAt?: number;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private firestore: Firestore){

  }

  getPets(): Observable<Pet[]> {
    const petsCollectionRef = collection(this.firestore, 'pets');
    const q = query(petsCollectionRef, orderBy('createdAt', 'desc'))
    return collectionData(q, { idField: 'id' }) as Observable<Pet[]>;
  }

  getPet(id: string): Observable<Pet | undefined> {
    const petDocRef = doc(this.firestore, `pets/${id}`);
    return docData(petDocRef, { idField: 'id' }) as Observable<Pet | undefined>;
  }

  addPet(pet: Pet) {
    const petsCollectionRef = collection(this.firestore, 'pets');
    return addDoc(petsCollectionRef, { ...pet, createdAt: Date.now() });
  }

  updatePet(pet: Pet) {
    const petDocRef = doc(this.firestore, `pets/${pet.id}`);
    return updateDoc(petDocRef, { name: pet.name, species: pet.species, race: pet.race, age: pet.age, observations: pet.observations });
  }

  deletePet(id: string) {
    const petDocRef = doc(this.firestore, `pets/${id}`);
    return deleteDoc(petDocRef);
  }

  getCarers(): Observable<Carer[]> {
    const carersCollectionRef = collection(this.firestore, 'carers');
    const q = query(carersCollectionRef, orderBy('createdAt', 'desc'))
    return collectionData(q, { idField: 'id' }) as Observable<Carer[]>;
  }

  getCarer(id: string): Observable<Carer | undefined> {
    const carerDocRef = doc(this.firestore, `carers/${id}`);
    return docData(carerDocRef, { idField: 'id' }) as Observable<Carer | undefined>;
  }

  addCarer(carer: Carer) {
    const carersCollectionRef = collection(this.firestore, 'carers');
    return addDoc(carersCollectionRef, { ...carer, createdAt: Date.now() });
  }

  updateCarer(carer: Carer) {
    const carerDocRef = doc(this.firestore, `carers/${carer.id}`);
    return updateDoc(carerDocRef, { name: carer.name, phoneNumber: carer.phoneNumber, experience: carer.experience, specialties: carer.specialties });
  }

  deleteCarer(id: string) {
    const carerDocRef = doc(this.firestore, `carers/${id}`);
    return deleteDoc(carerDocRef);
  }

}
