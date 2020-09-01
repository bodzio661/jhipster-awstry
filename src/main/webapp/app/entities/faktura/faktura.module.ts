import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AwstrySharedModule } from 'app/shared/shared.module';
import { FakturaComponent } from './faktura.component';
import { FakturaDetailComponent } from './faktura-detail.component';
import { FakturaUpdateComponent } from './faktura-update.component';
import { FakturaDeleteDialogComponent } from './faktura-delete-dialog.component';
import { fakturaRoute } from './faktura.route';

@NgModule({
  imports: [AwstrySharedModule, RouterModule.forChild(fakturaRoute)],
  declarations: [FakturaComponent, FakturaDetailComponent, FakturaUpdateComponent, FakturaDeleteDialogComponent],
  entryComponents: [FakturaDeleteDialogComponent],
})
export class AwstryFakturaModule {}
