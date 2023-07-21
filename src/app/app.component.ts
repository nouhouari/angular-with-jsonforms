import { Component } from '@angular/core';
import { angularMaterialRenderers } from '@jsonforms/angular-material';
import uischemaAsset from '../assets/uischema.json';
import schemaAsset from '../assets/schema.json';
import { ValidationMode } from '@jsonforms/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  renderers = [
    ...angularMaterialRenderers
  ];
  validationMode: ValidationMode = 'ValidateAndShow';
  error = false;
  uischema = uischemaAsset;
  schema = schemaAsset;
  data = {};
  validationErrors: any;

  onError(ev: any): void {
    this.validationErrors = ev;
  }

  defaultConfig = {
    showUnfocusedDescription: true
  };
}
