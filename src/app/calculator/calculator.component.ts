import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  screen = '1';

  handleNumberClick(number: string): void {
    if (number === '0') {
      if (this.screen !== '0') {
        this.screen = this.screen + number;
      }
    } else {
      if (this.screen !== '0') {
        this.screen = this.screen + number;
      } else {
        this.screen = number;
      }
    }
  }

  handleOperationClick(operation: string): void {
    const willReplaceChars = ['+', '-', '*', '/', '.'];
    const lastCharacter = this.screen[this.screen.length - 1];

    const replaceLastChar = willReplaceChars.find((char) => char === lastCharacter);

    if (replaceLastChar) {
      const newOperation = this.screen.split('');
      this.screen = newOperation
        .map((char, i) => {
          if (i === newOperation.length - 1) {
            return operation;
          } else {
            return char;
          }
        })
        .join('');
    } else {
      this.screen = this.screen + operation;
    }
  }

  calculate(): void {
    this.screen = eval(this.screen);
  }

  clear(): void {
    this.screen = '0';
  }

  backspace(): void {
    const screenChars = this.screen.split('');

    if (screenChars.length === 1) {
      this.screen = '0';
    } else {
      this.screen = screenChars
        .filter((_, i) => {
          if (i === screenChars.length - 1) {
            return false;
          } else {
            return true;
          }
        })
        .join('');
    }
  }
}
