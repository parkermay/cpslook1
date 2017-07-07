import { Injectable } from '@angular/core';
import { Filter } from '../filter';

@Injectable()
export class ConfigurationService {

    private configurationData: any[] = [
        {
            id: '100010',
            nodeId: 'cps',
            name: 'program.tag.license.Pharmaserv',
            value: 'true'
        },
        {
            id: '100011',
            nodeId: 'cps-ERX-NDCD01-ERX',
            name: 'program.tag.license.PCSTest',
            value: 'false'
        }
    ];

    constructor() { }

    getConfigurationData(filter: Filter): any[] {
        return this.configurationData;
    }

}
