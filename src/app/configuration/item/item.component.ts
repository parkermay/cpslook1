import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
    private colHeaders: string[] = ['id', 'path', 'name', 'value'];

    private columns: any[] = [
        {
            data: 'id',
            readOnly: true
        },
        {
            data: 'path'
        },
        {
            data: 'name'
        },
        {
            data: 'value'
        }
    ]

    private options = {
        rowHeaders: true,
        contextMenu: [
            'row_below', 'remove_row', '---------', 'undo', 'redo'
        ]
        
    };

    @Input() tableData: any[];

    constructor() { }

    ngOnInit() {
    }

}
