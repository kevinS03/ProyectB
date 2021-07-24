import { Component } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Angular8Firebase';
  description = 'Angular-Fire-Demo';
 
  itemValue = '';
  items: Observable<any>;
  cuentaList: AngularFireList<any>;
 
  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }
 
  onSubmit() {
    this.db.list('items').push({ content: this.itemValue});
    this.itemValue = '';
  }
  getCuentas(){
	  
	return this.cuentaList = this.db.list('Cuentas');
}
}