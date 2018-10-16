import { PrestationsModule } from './prestations.module';

describe('PrestationModule', () => {
  let prestationsModule: PrestationsModule;

  beforeEach(() => {
    prestationsModule = new PrestationsModule();
  });

  it('should create an instance', () => {
    expect(prestationsModule).toBeTruthy();
  });
});
