import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {
    RestExplorerBindings,
    RestExplorerComponent,
} from '@loopback/rest-explorer';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {ServiceMixin} from '@loopback/service-proxy';
import * as path from 'path';
import {MySequence} from './sequence';


export class KerzachiApplication extends BootMixin(
    ServiceMixin(RepositoryMixin(RestApplication)),
) {
    constructor(options: ApplicationConfig = {}) {
        super(options);
        this.static('/', path.join(__dirname, '../public'));
        this.bind(RestExplorerBindings.CONFIG).to({
            path: '/explorer',
        });
        this.sequence(MySequence);
        this.component(RestExplorerComponent);
        this.projectRoot = __dirname;

    }

    async start() {
        await super.start();
    }

}
/*
*
* auth_date: 1558613168
first_name: "Telega"
hash: "a54ae199ddccd778df85d602773a4ea1fd270aa195d4014dd1a2da466faae56d"
id: 453964513
photo_url: "https://t.me/i/userpic/320/eletag.jpg"
username: "eletag"
* */