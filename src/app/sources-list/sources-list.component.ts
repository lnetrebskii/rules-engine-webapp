import {Component, Input, OnInit} from '@angular/core';
import {Source} from "../model/source"

@Component({
  selector: 'app-sources-list',
  templateUrl: './sources-list.component.html',
  styleUrls: ['./sources-list.component.css']
})
export class SourcesListComponent implements OnInit {
  
  @Input()
  sources: Source[];

  constructor() { }

  ngOnInit(): void {
    this.sources = [
      {
        category: "Camera",
        name: "Temp camera",
        iconUrl: "https://sunguide.info/wp-content/uploads/2018/11/IMG_8948.jpg",
        id: "5",
        description: "Алтуфьевское шоссе",
        sourceListIcon: "N/A"
      }
    ]
  }

  editSource(source: any) {
      
  }
  
}
