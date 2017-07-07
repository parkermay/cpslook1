import { Component, OnInit } from '@angular/core';

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

    private data: any[] = [
        {
            id: '100000',
            path: 'cps',
            name: 'program.tag.license.Pharmaserv',
            value: 'true'
        },
        {
            id: '100001',
            path: 'cps-ERX-NDCD01-ERX',
            name: 'program.tag.license.PCSTest',
            value: 'false'
        }
    ];
    
    private options = {
        rowHeaders: true,
        contextMenu: [
            'row_below', 'remove_row', '---------', 'undo', 'redo'
        ]
        
    };

  constructor() { }

  ngOnInit() {
  }

}
