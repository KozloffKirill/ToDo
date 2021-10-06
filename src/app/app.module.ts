import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { TasksComponent } from './components/tasks/tasks.component';
import * as fromTasks from './store/tasks.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewTaskComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ tasks: fromTasks.tasksReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forFeature(fromTasks.tasksFeatureKey, fromTasks._tasksReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
