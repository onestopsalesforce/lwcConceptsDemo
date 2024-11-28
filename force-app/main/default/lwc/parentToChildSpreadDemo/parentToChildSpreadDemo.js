import { LightningElement } from 'lwc';

export default class ParentToChildSpreadDemo extends LightningElement {

    personInfo = {
        fullName: 'Rocky Balboa',
        fromCountry: 'USA'
    };

    handleChange(event) {
        if (event.target.name)  {
            this.personInfo = {... this.personInfo, [event.target.name]: event.target.value} 
        }                  
    }
}