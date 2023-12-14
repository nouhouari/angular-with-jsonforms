import { Component, OnInit } from '@angular/core';
import { angularMaterialRenderers } from '@jsonforms/angular-material';
import { Generate, ValidationMode } from '@jsonforms/core';
import uiSchema from '../assets/uischema.json';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  renderers = [
    ...angularMaterialRenderers
  ];

  validationMode: ValidationMode = 'ValidateAndShow';
  error = false;
  schema: any;
  data: any;
  validationErrors: any;
  uischema: any;
  loading = false;

  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.loading = true;
      this.api.getLatestSchema().subscribe(
        (formdef) => {
          this.schema = JSON.parse(formdef.formDefinition);
          this.uischema = Generate.uiSchema(this.schema);
        },
        (err) => {},
        ()=> this.loading = false
      );
  }

  onError(ev: any): void {
    this.validationErrors = ev;
    this.error = ev.length>0;    
  }

  register(){
    console.log(this.data);
    
  }

  defaultConfig = {
    showUnfocusedDescription: true
  };
}
