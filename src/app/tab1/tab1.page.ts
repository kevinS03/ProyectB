import { Component, OnInit } from '@angular/core';
import { CuentasService } from '../services/cuentas.service';
import {Cuentas} from '../model/cuentas'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
	cuentalista: Cuentas[];

	constructor(public cuentasService: CuentasService) {}
	ngOnInit(){
		 this.cuentasService.getCuentas().snapshotChanges().subscribe(item =>{
			this.cuentalista = [];
			item.forEach(element =>{
				let x = element.payload.toJSON();
				x["$key"]= element.key;
				this.cuentalista.push(x as Cuentas);
			})
		 })
	}

}
