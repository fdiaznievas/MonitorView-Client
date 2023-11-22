import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FilterContactoPipe } from './filter-contacto.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { ComponentAngularComponent } from './component/component-angular/component-angular.component';
import { MainContainerComponent } from './component/main-container/main-container.component';
import { MenuLateralComponent } from './component/menu-lateral/menu-lateral.component';
import { IndexComponent } from './component/index/index.component';
import { AtmsDescargadosComponent } from './component/atms-descargados/atms-descargados.component';
import { AtmComponent } from './component/atm/atm.component';
import { ContactosComponent } from './component/contactos/contactos.component';
import { ContactosContentComponent } from './component/contactos-content/contactos-content.component';
import { IvecoComponent } from './component/iveco/iveco.component';
import { IvecoContentComponent } from './component/iveco/iveco-content/iveco-content.component';
import { TablaNovedadesComponent } from './component/tabla-novedades/tabla-novedades.component';
import { TablaModalComponent } from './component/tabla-novedades/tabla-modal/tabla-modal.component';
import { AddNovedadComponent } from './component/tabla-novedades/add-novedad/add-novedad.component';
import { FormatoFechaPipe } from './formato-fecha.pipe';
import { OrderByDatePipe } from './order-by-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ComponentAngularComponent,
    MainContainerComponent,
    MenuLateralComponent,
    IndexComponent,
    AtmsDescargadosComponent,
    AtmComponent,
    ContactosComponent,
    ContactosContentComponent,
    IvecoComponent,
    IvecoContentComponent,
    TablaNovedadesComponent,
    TablaModalComponent,
    AddNovedadComponent,
    FilterContactoPipe,
    FormatoFechaPipe,
    OrderByDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
