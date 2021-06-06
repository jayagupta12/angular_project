import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenModelComponent } from './template-driven-model.component';

describe('TemplateDrivenModelComponent', () => {
  let component: TemplateDrivenModelComponent;
  let fixture: ComponentFixture<TemplateDrivenModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
