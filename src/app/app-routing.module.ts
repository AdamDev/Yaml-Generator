import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { YamlGeneratorComponent } from './yaml-generator/yaml-generator.component';

const routes: Routes = [
  { path: '', redirectTo: '/yaml_generator', pathMatch: 'full' },
  { path: 'yaml_generator', component: YamlGeneratorComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
