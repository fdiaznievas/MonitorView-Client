import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FilterContactoPipe } from './filter-contacto.pipe';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { ComponentAngularComponent } from './component/component-angular/component-angular.component';
import { MainContainerComponent } from './component/main-container/main-container.component';
import { MenuLateralComponent } from './component/main-container/menu-lateral/menu-lateral.component';
import { TestComponent } from './component/test/test.component';
import { IndexComponent } from './component/index/index.component';
import { AtmsDescargadosComponent } from './component/atms-descargados/atms-descargados.component';
import { AtmComponent } from './component/atm/atm.component';
import { ContactosComponent } from './component/contactos/contactos.component';
import { ContactosContentComponent } from './component/contactos-content/contactos-content.component';
import { IvecoComponent } from './component/iveco/iveco.component';
import { IvecoContentComponent } from './component/iveco/iveco-content/iveco-content.component';
import { TablaNovedadesComponent } from './component/tabla-novedades/tabla-novedades.component';
import { TablaModalComponent } from './component/tabla-novedades/tabla-modal/tabla-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ComponentAngularComponent,
    MainContainerComponent,
    MenuLateralComponent,
    TestComponent,
    IndexComponent,
    AtmsDescargadosComponent,
    AtmComponent,
    ContactosComponent,
    ContactosContentComponent,
    FilterContactoPipe,
    IvecoComponent,
    IvecoContentComponent,
    TablaNovedadesComponent,
    TablaModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
