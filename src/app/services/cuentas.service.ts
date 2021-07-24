import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database'


@Injectable({
  providedIn: 'root'
})
export class CuentasService {
  cuentaList: AngularFireList<any>;
  constructor(public angularDatabase: AngularFireDatabase) { }

  getCuentas(){
	  
	return this.cuentaList = this.angularDatabase.list('Cuentas');
}
}
