import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/internal/Subscription';
import { IUser } from 'src/app/models/employees';
import { selectUser } from 'src/app/store/employees/employees.selectors';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {

  private _sub!: Subscription;

  public user!: IUser;

  public temperature: any = 0;
  public humidity: any = 0;

  constructor(
    private _store: Store
  ) { }

  ngOnInit(): void {
    this._sub = this._store.select(selectUser).subscribe(
      (user) => this.user = user
    );

    let apiKey = "8a38ff8566e4ff7f4fe96ac3e14ce28f";
    let city = "Saint Petersburg";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
    let promise = fetch(url).then(
      (weather) => {
        return weather.json();
      }
    ).then(
      (weather) => {
        console.log(weather);
        this.temperature = weather.main.temp;
        this.humidity = weather.main.humidity;
      }
    );
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

}
