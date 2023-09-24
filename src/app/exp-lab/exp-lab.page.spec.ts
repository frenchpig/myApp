import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpLabPage } from './exp-lab.page';

describe('ExpLabPage', () => {
  let component: ExpLabPage;
  let fixture: ComponentFixture<ExpLabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExpLabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
