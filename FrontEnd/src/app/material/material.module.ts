import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{ MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,    
    FormsModule,
    MatInputModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTabsModule,
  ]
})
export class MaterialModule { }
