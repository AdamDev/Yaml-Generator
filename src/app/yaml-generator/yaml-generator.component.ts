import { Component, OnInit } from '@angular/core';
import {Step} from '../models/step'
import { ClipboardService } from 'ngx-clipboard'
import {UtilsServiceService} from '../utils-service.service'

const IMAGE_WORK_DIR : string= 'IMAGE_WORK_DIR';

@Component({
  selector: 'app-yaml-generator',
  templateUrl: './yaml-generator.component.html',
  styleUrls: ['./yaml-generator.component.css']
})
export class YamlGeneratorComponent implements OnInit {  
  steps: Step[];
  stepsAsText: string;
  constructor(private _clipboardService: ClipboardService,
    private utils: UtilsServiceService) { }

  ngOnInit() {
    this.steps = [];
  }

  addNew(): void {
    
    let step:Step = new Step();
    step.name = "step_" + (this.steps.length + 1);
    step.image = "";
    step.title = "";
    step.commands = [];    
    step.cmd = [];
    step.entryPoint = [];
    step.environment = [];
    step.failFast = true;
    step.workingDirectory = IMAGE_WORK_DIR;

    this.steps.push(step);      
  }

  delete(step: Step): void {
    this.steps = this.steps.filter(s => s !== step);
  }

  copy(): void {    
    try{
      this._clipboardService.copyFromContent(this.stepsAsText);
      window.alert('Yaml copy successfuly')
    }
    catch(ex){
    }
  }

  getStepsAsText() : string {
    let res: string = "";

    res = this.utils.getStepsAsText(this.steps);

    this.stepsAsText = res;
    this.stepsAsText = this.stepsAsText.replace(/<br>/gi, "\r\n");
    this.stepsAsText = this.stepsAsText.replace(/&nbsp;/gi, " ");
    return res;
  }

}
