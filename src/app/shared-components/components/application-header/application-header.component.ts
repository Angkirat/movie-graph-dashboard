import { Component, OnInit } from '@angular/core';
import { ToggleThemeService } from './services/toggle-theme.service';

@Component({
  selector: 'app-application-header',
  templateUrl: './application-header.component.html',
  styleUrls: ['./application-header.component.scss']
})
export class ApplicationHeaderComponent implements OnInit {

  isDarkMode!: boolean;
  themeButtonTooltip!:string;

  constructor(private theme: ToggleThemeService) { }

  ngOnInit(): void {
    this.theme.initTheme();
    this.isDarkMode = this.theme.isDarkMode();
  }

  toggleTheme() {
    this.isDarkMode = this.theme.isDarkMode();

    this.isDarkMode
      ? this.theme.update('light-mode')
      : this.theme.update('dark-mode');

    this.themeButtonTooltip = this.isDarkMode
      ? 'Switch to Dark Mode'
      : 'Switch to Light Mode'
  }

}
