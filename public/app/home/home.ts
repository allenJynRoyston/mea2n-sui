import { Component } from '@angular/core';
import { UISEMANTIC_ALL } from '../../node_modules/ng2-semantic-ui-directives/ng2-sui'

@Component({
    selector: 'app-home',
    directives: [UISEMANTIC_ALL],
    templateUrl: '../../app/home/template.html'
})
export class HomeComponent { }
