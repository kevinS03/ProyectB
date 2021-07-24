import { Component } from '@angular/core';

import { CuentasService } from '../services/cuentas.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public cuentasService: CuentasService) {}

}
