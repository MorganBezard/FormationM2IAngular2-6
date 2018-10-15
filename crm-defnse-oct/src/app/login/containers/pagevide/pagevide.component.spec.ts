import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagevideComponent } from './pagevide.component';

describe('PagevideComponent', () => {
  let component: PagevideComponent;
  let fixture: ComponentFixture<PagevideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagevideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagevideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
