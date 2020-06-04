import { LightningElement , track ,api } from 'lwc';

export default class ChildComp2 extends LightningElement {
   @track fullName = {};
   @api outputMessage;//'We are learning';
   defaultMsg = 'We are learning';

    handleChange(event) {
        const field = event.target.name;
        if (field === 'firstName') {
            this.fullName.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.fullName.lastName = event.target.value;
        }
    }

    get uppercasedFullName() {
        return `${this.fullName.firstName} ${this.fullName.lastName}`.trim().toUpperCase();
    }

    @api
    play(fullName) {
        alert('1');
        const player = this.template.querySelector('template');
        alert('1');
        // the player might not be in the DOM just yet
        this.fullName = fullName;
        //this.fullName = { firstName : 'TdEST', lastName : 'Prashant' };
    }
    set message(val){
        this.outputMessage = val;
        console.log(this.outputMessage);
     }
     handleMessage(event){
        this.message = event.target.value;
     }
     get message(){
        return this.defaultMsg + "Lightning Web Component";
         
    }
}