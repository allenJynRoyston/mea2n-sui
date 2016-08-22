import { Component } from '@angular/core';
import { UISEMANTIC_ALL } from '../../node_modules/ng2-semantic-ui-directives/ng2-sui'

@Component({
    selector: 'my-app',
    directives: [UISEMANTIC_ALL],
    templateUrl: '../app/app/template.html'
})
export class AppComponent { }
