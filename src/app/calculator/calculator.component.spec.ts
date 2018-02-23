import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('the add button should add two numbers together', () => {
    component.numberClick(56);
    component.operationClick('+');
    component.numberClick(9);
    component.operationClick('=');
    expect(component.currentTotal).toBe(65);
  });

  it('the subtract button should subtract two numbers', () => {
    component.numberClick(45);
    component.operationClick('-');
    component.numberClick(10);
    component.operationClick('=');
    expect(component.currentTotal).toBe(35);
  });

  it('the multiply button should multiply two numbers', () => {
    component.numberClick(12);
    component.operationClick('*');
    component.numberClick(10);
    component.operationClick('=');
    expect(component.currentTotal).toBe(120);
  });

  it('the divide button should divide two numbers', () => {
    component.numberClick(150);
    component.operationClick('/');
    component.numberClick(50);
    component.operationClick('=');
    expect(component.currentTotal).toBe(3);
  });

  it('the clear entry button should clear the display', () => {
    component.numberClick(5);
    expect(component.display).toBe(5);
    component.operationClick('CE');
    expect(component.display).toBe(0);
  });

  it('the clear button should clear the entire component', () => {
    component.numberClick(12);
    component.operationClick('*');
    component.numberClick(10);
    expect(component.lastOperation).toBe('*');
    component.operationClick('C');
    expect(component.lastOperation).toBe('');
  });

  it('the back operation should remove one character from the display', () => {
    component.numberClick(12);
    component.operationClick('<');
    expect(component.display).toBe(1);
  });

  it('the +/- button should change the sign of the display value', () => {
    component.numberClick(12);
    component.operationClick('+/-');
    expect(component.display).toBe(-12);
  });

  it('the addition operation should display in the running calculation field', () => {
    expect(component.runningCalculation).toBe('');
    component.numberClick(12);
    component.operationClick('+');
    expect(component.runningCalculation).toBe('12 + ');
  });
});
