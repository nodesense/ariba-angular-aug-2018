import { CartModule } from './cart/cart.module';
import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';

import {BrowserModule} 
        from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
    imports: [
        // module dependencies
        BrowserModule,
        FormsModule,
        // AuthModule, InventoryModule, etc
    ], 
    // meta data
    declarations: [
        // components, directives, pipes
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent, 
        // Header, Footer etc
    ],

    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
