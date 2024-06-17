import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SkillsComponent} from "./skills/skills.component";
import {HeaderComponent} from "./header/header.component";
import {ProjectsComponent} from "./projects/projects.component";
import {ExperienceComponent} from "./experience/experience.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SkillsComponent, HeaderComponent, ProjectsComponent, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'siegfried';
}
