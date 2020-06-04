import { LightningElement ,api,track} from 'lwc';

export default class PrantComp1 extends LightningElement {
    @track fullName = { firstName : 'TdEST111111111', lastName : 'Prashant' };

    connectedCallback(){
       

    }

    onItemSubmit(){
            alert('submit');
            this.template.querySelector('c-child-Comp2').play(this.fullName);
    }
}