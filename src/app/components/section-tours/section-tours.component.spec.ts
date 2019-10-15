import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionToursComponent } from './section-tours.component';

describe('SectionToursComponent', () => {
  let component: SectionToursComponent;
  let fixture: ComponentFixture<SectionToursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionToursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
