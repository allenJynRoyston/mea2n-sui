import { Component } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
// all
import { UISEMANTIC_ALL } from '../../../node_modules/ng2-semantic-ui-directives/ng2-sui'

@Component({
    selector: 'about-container',
    templateUrl: './app/components/about/template_about_container.html',
    directives: [ROUTER_DIRECTIVES, UISEMANTIC_ALL]
})
export class AboutComponent {

}


@Component({
  selector: 'about-home',
  templateUrl: './app/components/about/template_home.html',
  directives: [UISEMANTIC_ALL]
})
export class AboutHomeComponent {

}




@Component({
  selector: 'about-item',
  templateUrl: './app/components/about/template_item.html',
  directives: [UISEMANTIC_ALL]
})
export class AboutItemComponent {
  id: any;
  paramsSub: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = +params['id']);
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
