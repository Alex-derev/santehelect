import axios from 'axios';
import AbstractLocalStorageService from './AbstractLocalStorageService';
import {serviceDataInterface} from "../pages/Heating";


class ServicePagesService extends AbstractLocalStorageService {
    public hasServicePages (): boolean {
        return this.has('servicePages');
    }

    public getServicePages(): object {
        return this.get('servicePages');
    }

    public setServicePages(): void {
        if(!this.hasServicePages()) {
            axios.get('api/get-initial-state')
                .then(({data}) => {
                    this.set('servicePages', data);
                })
                .catch(() => {});
        }
    }

    public hasServicePageByKey(key: string): boolean {
        return key in this.getServicePages();
    }

    public getServicePageByKey(key: string): serviceDataInterface {
        // @ts-ignore
        return this.getServicePages()[key];
    }
}

export default new ServicePagesService();