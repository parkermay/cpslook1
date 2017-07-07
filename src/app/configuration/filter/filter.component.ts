import { Component, OnInit } from '@angular/core';
import { Filter } from './filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

    filter: Filter = {
        path: '',
        key: '',
        caseSensitive: false,
        options: 'Exact Match'
    };
    isLicenseTagEntry: boolean;

    constructor() { }

    ngOnInit() {
    }

    savedFilter(commonOption: string): void {
        let executeFilter: boolean = false;

        switch (commonOption) {
            case 'vendorLicense':
                this.filter = {
                    path: '',
                    key: 'program.tag.license.',
                    caseSensitive: true,
                    options: 'Starts with'
                };
                this.isLicenseTagEntry = true;
                // put focus in Path
                break;

            case 'selfCountLicense':
                this.filter = {
                    path: '',
                    key: 'program.selfdirected.license.count',
                    caseSensitive: true,
                    options: 'Exact match'
                };
                this.isLicenseTagEntry = false;
                // put focus in Path
                break;

            case 'selfMpsaLicense':
                this.filter = {
                    path: 'cps',
                    key: 'program.tag.license.',
                    caseSensitive: true,
                    options: 'Starts with'
                };
                this.isLicenseTagEntry = true;
                executeFilter = true;
                break;

            case 'availableProgramTags':
                this.filter = {
                    path: 'cps',
                    key: 'program.tag.Instance.',
                    caseSensitive: true,
                    options: 'Starts with'
                };
                this.isLicenseTagEntry = false;
                executeFilter = true;
                break;

            default:
                break;
        }

        if (executeFilter) {
            // initiate service call
        }

      }
}
