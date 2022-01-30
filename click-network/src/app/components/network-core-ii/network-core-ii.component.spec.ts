import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkCoreIiComponent } from './network-core-ii.component';

describe('NetworkCoreIiComponent', () => {
  let component: NetworkCoreIiComponent;
  let fixture: ComponentFixture<NetworkCoreIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkCoreIiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkCoreIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
