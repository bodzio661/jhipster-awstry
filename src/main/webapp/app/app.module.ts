import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { AwstrySharedModule } from 'app/shared/shared.module';
import { AwstryCoreModule } from 'app/core/core.module';
import { AwstryAppRoutingModule } from './app-routing.module';
import { AwstryHomeModule } from './home/home.module';
import { AwstryEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    AwstrySharedModule,
    AwstryCoreModule,
    AwstryHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    AwstryEntityModule,
    AwstryAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class AwstryAppModule {}
