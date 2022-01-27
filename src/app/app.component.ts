import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'darkMode';

  func(){
    const target = document.getElementsByClassName('container')[0].classList.toggle('dark-mode');
    const ver = document.getElementsByClassName('card')[0].classList.toggle('dark-mode');
  }
}
