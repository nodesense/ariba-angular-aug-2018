import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';
import { PowerPipe } from './pipes/power.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

import { HighlightDirective } from 
        './directives/highlight.directive';
import { TestableDirective } from './directives/testable.directive';
         
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
                AddressComponent,
                PowerPipe,
                FilterPipe,
                SortPipe,
                HighlightDirective,
                TestableDirective
                // private , directives, pipes
              ],

  exports: [
        // public components, to be shared with others
        // subset of declarations
        AddressComponent,
        PowerPipe,
        FilterPipe,
        SortPipe,
        HighlightDirective,
        TestableDirective
  ]
})
export class SharedModule { }
