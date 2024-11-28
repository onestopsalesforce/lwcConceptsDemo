import { LightningElement } from 'lwc';

export default class ParentWithoutSpreadDemo extends LightningElement {
    fullNameFromParent = 'Rocky Balboa'
    fromCountryFromParent =  'USA'

    handleChange(event) {        
        if (event.target.name === 'fullNameFromParent') {
            this.fullNameFromParent = event.target.value;
        } else if (event.target.name === 'fromCountryFromParent') {
            this.fromCountryFromParent = event.target.value;
        }   
    }
}