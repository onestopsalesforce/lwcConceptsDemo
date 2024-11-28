import { LightningElement, api } from 'lwc';

export default class ChildDataBinding extends LightningElement {

    @api fullName = 'Test Name';
    @api fromCountry = 'Unknown Country';
}