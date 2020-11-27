import { async, TestBed } from '@angular/core/testing';
import { LightningComponentsModule } from './lightning-components.module';

describe('LightningComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LightningComponentsModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(LightningComponentsModule).toBeDefined();
  });
});
