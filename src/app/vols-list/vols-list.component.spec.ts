import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolsListComponent } from './vols-list-component.component';

describe('VolsListComponentComponent', () => {
  let component: VolsListComponent;
  let fixture: ComponentFixture<VolsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
