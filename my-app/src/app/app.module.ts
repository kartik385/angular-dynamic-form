import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicInputComponent } from './components/dynamic-input/dynamic-input.component';
import { InputFormPipe } from './pipes/input-form.pipe';
import { InputTypeComponent } from './components/input-type/input-type.component';

@NgModule({
  declarations: [AppComponent, DynamicInputComponent, InputFormPipe, InputTypeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
