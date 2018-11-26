import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YamlStepComponent } from './yaml-step.component';

describe('YamlStepComponent', () => {
  let component: YamlStepComponent;
  let fixture: ComponentFixture<YamlStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YamlStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YamlStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
