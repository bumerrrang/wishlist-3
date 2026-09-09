import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';  // the component we are working with
import { FormsModule } from '@angular/forms';

// it defines particularly everything that our application requires in order to run
@NgModule({
  declarations: [  // a set of components or directives that belong to this particular module
    App  // it has been declared in the module
  ],
  imports: [  // things that are available to the templates inside of this module
    BrowserModule,
    AppRoutingModule,
    FormsModule  // for double binding with forms, ie ng* directives
  ],
  providers: [  // objects that can be injected to parts of this module
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]  // the entry point of the module
})
export class AppModule { }
