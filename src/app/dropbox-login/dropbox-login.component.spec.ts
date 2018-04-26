import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropboxLoginComponent } from './dropbox-login.component';

describe('DropboxLoginComponent', () => {
  let component: DropboxLoginComponent;
  let fixture: ComponentFixture<DropboxLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropboxLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropboxLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
