import { ProductModule } from './product/product.module';
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
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

// ng 4.3 onwards
import {HttpClientModule} from '@angular/common/http';

import {RouterModule, Routes} from '@angular/router';
// step 1: map url to component
const routes: Routes = [
    {
        path: '', // home default url
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: '**', // not found
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
        // module dependencies
        BrowserModule,
        FormsModule,

        SharedModule,

        HttpClientModule,

        // step 2, apply route configuration to angular
        RouterModule.forRoot(routes),
        ProductModule
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
        NotFoundComponent,
          
        // Header, Footer etc
    ],

    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
