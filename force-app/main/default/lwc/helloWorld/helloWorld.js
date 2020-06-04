import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'Worldd';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}