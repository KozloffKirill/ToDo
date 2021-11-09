import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { TasksComponent } from './components/tasks/tasks.component';
import * as fromTasks from './store/tasks.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TasksEffects } from './store/tasks.effects';
import { TaskBoardComponent } from './components/task-board/task-board.component';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewTaskComponent,
    TasksComponent,
    TaskBoardComponent,
    TaskComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule,
    StoreModule.forRoot({ tasks: fromTasks.tasksReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forFeature(fromTasks.tasksFeatureKey, fromTasks._tasksReducer),
    EffectsModule.forRoot([TasksEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
