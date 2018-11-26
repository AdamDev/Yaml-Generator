import { Component, OnInit, Input } from '@angular/core';
import {Step} from '../models/step'
import { KeyAndIndex } from '../models/key-and-index';
import {ArraysTypes} from '../models/arrays-types-enum';
import { Key } from 'protractor';

@Component({
  selector: 'app-yaml-step',
  templateUrl: './yaml-step.component.html',
  styleUrls: ['./yaml-step.component.css']
})
export class YamlStepComponent implements OnInit {
  @Input() step: Step;
  constructor() { }

  ngOnInit() {
  }

  deleteItemFromArray(item: KeyAndIndex, type: ArraysTypes){
    switch(type) { 
      case ArraysTypes.Commands: { 
        this.step.commands = this.step.commands.filter(c => c.index !== item.index);
         break; 
      } 
      case ArraysTypes.Cmd: { 
        this.step.cmd = this.step.cmd.filter(c => c.index !== item.index);
         break; 
      } 
      case ArraysTypes.EntryPoint: { 
        this.step.entryPoint = this.step.entryPoint.filter(c => c.index !== item.index);
         break; 
      } 
      case ArraysTypes.Environment: { 
        this.step.environment = this.step.environment.filter(c => c.index !== item.index);
         break; 
      } 
      default: { 
         //statements; 
         break; 
      } 
   } 
  }

  createNewItemInArray(type: ArraysTypes){
    let kai: KeyAndIndex = new KeyAndIndex();
    kai.key = "";

    switch(type) { 
      case ArraysTypes.Commands: { 
        kai.index = this.step.commands.length + 1;
        kai.key = '';
        this.step.commands.push(kai);
        break; 
      } 
      case ArraysTypes.Cmd: { 
        kai.index = this.step.cmd.length + 1;
        kai.key = '';
        this.step.cmd.push(kai);
        break; 
      } 
      case ArraysTypes.EntryPoint: { 
        kai.index = this.step.entryPoint.length + 1;
        kai.key = '';
        this.step.entryPoint.push(kai);
        break; 
      } 
      case ArraysTypes.Environment: { 
        kai.index = this.step.environment.length + 1;
        kai.key = '';
        this.step.environment.push(kai);
        break; 
      } 
      default: { 
         //statements; 
         break; 
      } 
   } 
  }
}
