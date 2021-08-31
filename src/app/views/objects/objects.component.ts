import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import * as objectsData from '../../shared/data/object_data.json';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.scss']
})
export class ObjectsComponent implements OnInit {
  data: any = (objectsData  as  any).default;

  constructor() { }

  ngOnInit(): void {
  }

}
