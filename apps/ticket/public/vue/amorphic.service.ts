import {WindowService} from './window.service';

export class AmorphicService {
    controller: any;

    constructor(private windowService: WindowService) {
        this.controller = this.windowService.nativeWindow.controller;
    }
}