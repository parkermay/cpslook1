import { Component, OnInit } from '@angular/core';
import { Filter } from './filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

    filter: Filter;

    isLicenseTagEntry: boolean;

    commonOptions: string[] = ['Exact match', 'Starts with', 'Ends with', 'Contains', 'Regular expression'];

    private searchResults: any[] = [
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

    constructor() {
        this.filter = {
            path: 'cps',
            key: 'freds',
            caseSensitive: true,
            options: 'Exact match'
        };
    }

    ngOnInit() {
    }

    performSearch(): void {
        
        console.log(`filter = ${JSON.stringify(this.filter)}`);
    }

    selectSavedFilter(commonOption: string): void {
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
