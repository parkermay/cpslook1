import { Component, OnInit } from '@angular/core';
import { Filter } from './../../filter';
import { ConfigurationService } from '../../service/configuration.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [ ConfigurationService ]
})
export class FilterComponent implements OnInit {

    filter: Filter;

    isLicenseTagEntry: boolean;

    commonOptions: string[] = ['Exact match', 'Starts with', 'Ends with', 'Contains', 'Regular expression'];

    private searchResults: any[];

    constructor(private configurationService: ConfigurationService) {
        this.filter = {
            path: 'cps',
            key: 'freds',
            caseSensitive: true,
            options: 'Exact match'
        };

        this.searchResults = [
            {
                id: '',
                path: '',
                name: '',
                value: ''
            }
            ];
    }

    ngOnInit() {
    }

    performSearch(): void {
        console.log(`filter = ${JSON.stringify(this.filter)}`);
        this.configurationService.getConfigurationData(this.filter).then(configData => this.searchResults = configData);
    }

    saveChanges(): void {
        debugger;
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
