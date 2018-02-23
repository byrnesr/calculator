import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {
  public runningCalculation = '';
  public currentTotal = 0;
  /**
   *
   * @type {number}
   */
  public display = 0;
  /**
   * The last operation key recorded
   * @type {string}
   */
  public lastOperation = '';
  /**
   * The last number to be entered in (this is set when an operation key is clicked)
   * @type {number}
   */
  public lastNumber = 0;
  //This should only be true if the last button clicked was an operation
  public isOperationLast = false;


  constructor() { }

  ngOnInit() {
  }

  /**
   * Whenever a number button is clicked
   * @param num: the value of the button
   */
  public numberClick(num) {
    if(this.isOperationLast){
      this.display = num;
      this.isOperationLast = false;
    }
    else{
      let s = this.display.toString();
      this.display = parseInt(s + num);
    }
  }

  /**
   * Whenever an operation button is clicked
   * @param operation: the string value of the button being clicked
   */
  public operationClick(operation) {
    if(this.display !== 0){
      switch (operation) {
        //addition
        case '+':
          this.addDisplayToTotal('+');
          this.lastOperation = '+';
          this.isOperationLast = true;
          break;
        //subtraction
        case '-':
          this.addDisplayToTotal('-');
          this.lastOperation = '-';
          this.isOperationLast = true;
          break;
        //equals
        case '=':
          this.addDisplayToTotal('=');
          this.runningCalculation = '';
          this.lastOperation = '=';
          this.lastNumber = 0;
          this.isOperationLast = true;
          break;
        //multiplication
        case '*':
          this.addDisplayToTotal('*');
          this.lastOperation = '*';
          this.isOperationLast = true;
          break;
        //division
        case '/':
          this.addDisplayToTotal('/');
          this.lastOperation = '/';
          this.isOperationLast = true;
          break;
        //backspace
        case '<':
          let s = this.display.toString();
          this.display = parseInt(s.slice(0, -1));
          this.isOperationLast = false;
          break;
        //multiply by -1
        case '+/-':
          this.display *= -1;
          break;
        //Clear All
        case 'C':
          this.display = 0;
          this.currentTotal = 0;
          this.lastNumber = 0;
          this.runningCalculation = '';
          this.isOperationLast = false;
          this.lastOperation = '';
          this.isOperationLast = true;
          break;
        //Clear Entry (display)
        case 'CE':
          this.display = 0;
          this.isOperationLast = true;
          break;
      }
    }
  }

  /**
   * Called whenever an operation is adding to the current total (+, -, *, /, and =)
   * @param operation: the string value of the operation that was clicked
   */
  private addDisplayToTotal(operation) {
    this.runningCalculation += this.display + ' ' + operation + ' ';
    if (this.lastNumber !== 0) {
      if (this.lastOperation === '+') {
        this.currentTotal += this.display;
      }
      else if(this.lastOperation === '-'){
        this.currentTotal -= this.display;
      }
      else if(this.lastOperation === '*'){
        this.currentTotal *= this.display;
      }
      else if(this.lastOperation === '/'){
        this.currentTotal /= this.display;
      }
    }
    else {
      this.currentTotal = this.display;
    }
    this.lastNumber = this.display;
    this.display = this.currentTotal;
  }


}
