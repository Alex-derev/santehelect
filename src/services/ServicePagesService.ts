import axios from 'axios';
import AbstractLocalStorageService from './AbstractLocalStorageService';


class ServicePagesService extends AbstractLocalStorageService {
    // public hasServicePages (): boolean {
    //     return this.has('servicePages');
    // }

    public setServicePages() {
        axios.get('api/get-initial-state')
            .then(({data}) => {
                this.set('servicePages', data);
            })
            .catch(() => {});
    }
}

export default new ServicePagesService();