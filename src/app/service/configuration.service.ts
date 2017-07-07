import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

// Is this needed even if we're not using the in memory web api?
import 'rxjs/add/operator/toPromise';

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

    private configurationUrl = 'http://localhost:8080/cps/configuration/rest/v1/json/configuration/filter';

    constructor(private http: Http) { }

    getConfigurationData(filter: Filter): Promise<any[]> {
        return Promise.resolve(this.configurationData);
    }

}
