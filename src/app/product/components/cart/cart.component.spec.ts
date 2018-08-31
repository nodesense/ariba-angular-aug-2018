import { DataService } from './../../../shared/services/data.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { CartItem } from '../../../shared/models/cart-item';

fdescribe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      providers: [ // ng 5
        DataService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    
    let item = new CartItem();
    item.id = 1;
    item.name = 'P1';
    item.price = 1000;
    item.qty = 2;

    component.dataService.addItem(item);
    // update ui
    fixture.detectChanges();

    const element = fixture.nativeElement;
    expect(element.querySelectorAll('tr').length)
                                      .toBe(2);

    expect(element.querySelectorAll('tr')[1].textContent)
    .toContain('1000');

    item = new CartItem();
    item.id = 2;
    item.name = 'P2';
    item.price = 3000;
    item.qty = 1;
    
    component.dataService.addItem(item);
    // update ui
    fixture.detectChanges();
    expect(element.querySelectorAll('tr').length)
                                      .toBe(3);

    expect(element.querySelector('p').textContent)
    .toContain("5000");


  });



});
