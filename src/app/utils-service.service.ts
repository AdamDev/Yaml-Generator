import { Injectable } from '@angular/core';
import {Step} from '../app/models/step'

const BREAK_LINE = "<br>";
const SPACE = "&nbsp;";
const DOUBLE_SPACE = "&nbsp;&nbsp;";
const TRIPLE_SPACE = "&nbsp;&nbsp;&nbsp;";

@Injectable({
  providedIn: 'root'
})

export class UtilsServiceService {

  constructor() { }

  getStepsAsText(steps: Step[]) : string {
    let res: string = "";

    res += "version: '1.0' " + BREAK_LINE + "steps: " + BREAK_LINE;

    for (let step of steps) {
      res += BREAK_LINE;     
      res += BREAK_LINE;       
      res += SPACE;
      res += step.name + ":";
      
      if(!!step.title){
        res += BREAK_LINE;
        res += DOUBLE_SPACE;
        res += " title: '" + step.title + "'";
      }
      if(!!step.description){
        res += BREAK_LINE;
        res += DOUBLE_SPACE;
        res += " description: " + step.description;
      }
      if(!!step.workingDirectory){
        res += BREAK_LINE;
        res += DOUBLE_SPACE;
        res += " working_directory: " + step.workingDirectory;
      }
      if(step.commands.length > 0){
        res += BREAK_LINE;
        res += DOUBLE_SPACE;
        res += " commands: ";

        for (let cmd of step.commands) {   
          res += BREAK_LINE;       
          res += TRIPLE_SPACE;
          res += " -" + cmd.key;          
        }
      }
      if(step.cmd.length > 0){
        res += BREAK_LINE;
        res += DOUBLE_SPACE;
        res += " cmd: ";

        for (let cmd of step.cmd) {
          res += BREAK_LINE;
          res += TRIPLE_SPACE;
          res += " -" + cmd.key;          
        }
      }
      if(step.environment.length > 0){
        res += BREAK_LINE;
        res += DOUBLE_SPACE;
        res += " environment: ";

        for (let cmd of step.environment) {
          res += BREAK_LINE;
          res += TRIPLE_SPACE;
          res += " -" + cmd.key;          
        }
      }
      if(step.entryPoint.length > 0){
        res += BREAK_LINE;
        res += DOUBLE_SPACE;
        res += " entry_point: ";

        for (let cmd of step.entryPoint) {
          res += BREAK_LINE;
          res += TRIPLE_SPACE;
          res += " -" + cmd.key;          
        }
      }
      res += BREAK_LINE;
      res += DOUBLE_SPACE;
      res += " fail_fast: " + step.failFast;

      if(!!step.when){
        res += BREAK_LINE;
        res += DOUBLE_SPACE;
        res += " when: " + step.when;
      }
      if(!!step.onSuccess){
        res += BREAK_LINE;
        res += DOUBLE_SPACE;
        res += " on_success: " + step.onSuccess;
      }
      if(!!step.onFail){
        res += BREAK_LINE;
        res += DOUBLE_SPACE;
        res += " on_fail: " + step.onFail;
      }
      if(!!step.onFinish){
        res += BREAK_LINE;
        res += DOUBLE_SPACE;
        res += " on_finish: " + step.onFinish;
      }
      if(!!step.retry){
        res += BREAK_LINE;
        res += DOUBLE_SPACE;
        res += " retry: " + step.retry;
      }
    }

    return res;
  }
}
