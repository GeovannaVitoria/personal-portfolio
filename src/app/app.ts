import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './components/menu/menu';
import { Header } from './components/header/header';
import { Projects } from './components/projects/projects';
import { AboutMe } from './components/about-me/about-me';
import { Servicos } from './components/servicos/servicos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    Menu,
    Header,
    Projects,
    AboutMe,
    Servicos
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'personal-portfolio';
}
