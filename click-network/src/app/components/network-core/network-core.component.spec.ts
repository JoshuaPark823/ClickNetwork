import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkCoreComponent } from './network-core.component';

describe('NetworkCoreComponent', () => {
  let component: NetworkCoreComponent;
  let fixture: ComponentFixture<NetworkCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
