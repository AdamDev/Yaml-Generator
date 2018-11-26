import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {SortablejsModule} from 'angular-sortablejs'
import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { YamlGeneratorComponent } from './yaml-generator/yaml-generator.component';
import { AppRoutingModule } from './app-routing.module';
import { YamlStepComponent } from './yaml-step/yaml-step.component';

@NgModule({
  declarations: [
    AppComponent,
    YamlGeneratorComponent,
    YamlStepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SortablejsModule.forRoot({ animation: 150 }),
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
