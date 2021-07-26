import { Component, OnInit } from '@angular/core';
import { CuentasService } from '../services/cuentas.service';
import { Cuentas } from '../model/cuentas';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
	cuentalista: Cuentas[];

	constructor(public cuentasService: CuentasService) {}
	ngOnInit(){
		this.mostrar();
	}
	ionViewDidEnter(){
		this.mostrar();
	  }
	mostrar(){
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
