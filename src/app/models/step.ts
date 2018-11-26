import {KeyAndIndex} from '../models/key-and-index'
export class Step{
    name: String;
    title: string;
    description: string;    
    image: string; //required
    workingDirectory: string; //default IMAGE_WORK_DIR
    commands: KeyAndIndex[];
    cmd: KeyAndIndex[];
    environment: KeyAndIndex[];
    entryPoint: KeyAndIndex[];    
    failFast: boolean; //default true
    when: string;
    onSuccess: string;
    onFail: string;
    onFinish: string;
    retry: string;
}