import { MyRouteModule } from './my-route.module';

describe('MyRouteModule', () => {
  let myRouteModule: MyRouteModule;

  beforeEach(() => {
    myRouteModule = new MyRouteModule();
  });

  it('should create an instance', () => {
    expect(myRouteModule).toBeTruthy();
  });
});
