import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareLinkdialogComponent } from './share-linkdialog.component';

describe('ShareLinkdialogComponent', () => {
  let component: ShareLinkdialogComponent;
  let fixture: ComponentFixture<ShareLinkdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareLinkdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareLinkdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
