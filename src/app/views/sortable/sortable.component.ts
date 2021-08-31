import { Component, OnInit } from '@angular/core';

import * as default_data from '../../shared/data/sortable_data.json';

@Component({
  selector: 'app-sortable',
  templateUrl: './sortable.component.html',
  styleUrls: ['./sortable.component.scss']
})

export class SortableComponent implements OnInit {

  sortableData: any = (default_data  as  any).default.layout[0].sections;

  constructor() { }

  ngOnInit(): void {
  }

  radioChecked(item: any): void {
    item.show_section_title = item.show_section_title == 'no' ? 'yes' : 'no';
  }

}
