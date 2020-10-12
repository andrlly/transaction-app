import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let translatesService, transactionDS

  beforeEach(() => {
    translatesService = {
      use: jasmine.createSpy('use')
    }
    component = new HeaderComponent(translatesService, transactionDS);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('translatesService', () => {
    const lang = 'en';
    component.switchLang(lang);
    expect(translatesService.use).toHaveBeenCalledWith(lang);
  });
});
