import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YamlGeneratorComponent } from './yaml-generator.component';

describe('YamlGeneratorComponent', () => {
  let component: YamlGeneratorComponent;
  let fixture: ComponentFixture<YamlGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YamlGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YamlGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
