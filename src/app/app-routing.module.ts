import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtmComponent } from './component/atm/atm.component';
import { AtmsDescargadosComponent } from './component/atms-descargados/atms-descargados.component';
import { ContactosComponent } from './component/contactos/contactos.component';
import { IndexComponent } from './component/index/index.component';
import { IvecoComponent } from './component/iveco/iveco.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'descargados', component: AtmsDescargadosComponent },
  { path: 'atm', component: AtmComponent},
  { path: 'contacto', component: ContactosComponent },
  { path: 'iveco', component: IvecoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
