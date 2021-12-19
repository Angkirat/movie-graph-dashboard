import { Component, OnInit } from '@angular/core';
import { PullRawDataService } from '../shared-components/services/pull-raw-data.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {

  constructor(private entityData: PullRawDataService) { }

  ngOnInit(): void {
  }

}
