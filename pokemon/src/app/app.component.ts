import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottoniComponent } from './bottoni/bottoni.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BottoniComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'pokemon';
}
