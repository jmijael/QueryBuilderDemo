import { Component } from '@angular/core';
import { QueryBuilderConfig } from 'angular2-query-builder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'QueryBuilderDemo';
  query = { 
    "condition": "or", 
    "rules": [ 
      { "field": "targetStatusSecondary", "operator": "=", "value": "1" }, 
      { "field": "targetStatusSecondary", "operator": "=", "value": "2" }, { "condition": "and", "rules": [ { "field": "updateFieldName", "operator": "=", "value": "1" } ] } ] };
  //query2= "{condition: 'and',rules: [{field: 'age', operator: '<=', value: 'Bob'}, {field: 'gender', operator: '>=', value: 'm'}]}";
  
  config: QueryBuilderConfig = {
    fields: {

      targetStatusSecondary: {
        name: 'TargetStatusSecondary', 
        type: 'category',
        options: [
          {name: 'QO Approved', value: '1'},
          {name: 'Client Approved', value: '2'}
        ]
      },
      updateFieldName: {
        name: 'UpdateFieldName',
        type: 'category',
        options: [
          {name: 'ClientCOBUpdated', value: '1'},
          {name: 'ClientCOB', value: '2'}
        ]
      }
    }
  }
}