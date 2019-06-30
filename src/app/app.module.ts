import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShowcaseModule } from './showcase/showcase.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ShowcaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
