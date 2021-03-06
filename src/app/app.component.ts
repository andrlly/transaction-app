import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'uk']);
    translate.setDefaultLang('en');
  }
}
