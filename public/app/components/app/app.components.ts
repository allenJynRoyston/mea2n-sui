import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
// all
import { UISEMANTIC_ALL } from '../../../node_modules/ng2-semantic-ui-directives/ng2-sui'

@Component({
  selector: 'my-app',
  templateUrl: './app/components/app/template.html',
  // add our router directives we will be using
  directives: [ROUTER_DIRECTIVES, UISEMANTIC_ALL]
})
export class AppComponent { }
