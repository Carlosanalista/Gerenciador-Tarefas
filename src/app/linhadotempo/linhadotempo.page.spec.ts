import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhadotempoPage } from './linhadotempo.page';

describe('LinhadotempoPage', () => {
  let component: LinhadotempoPage;
  let fixture: ComponentFixture<LinhadotempoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinhadotempoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinhadotempoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
