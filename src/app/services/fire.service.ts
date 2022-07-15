import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from 'src/environments/environment';
import { Firestore, getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"
import { Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FireService {
  fApp = initializeApp(environment.firebaseConfig);
  fCloudStorage!: Firestore
  constructor() {
    console.warn('fire...');
    this.getCloudFirestore('photo');
  }

  getCloudFirestore(docName:string): Observable<any> {
    // this.fCloudStorage = getFirestore(this.fApp);
    return from(getDocs(collection(getFirestore(this.fApp), docName)));    
    // const querySnapshot = await getDocs(collection(this.fCloudStorage, docName));    
    // querySnapshot.forEach((doc) => {
      
      
    //   console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    // });

  }
}
