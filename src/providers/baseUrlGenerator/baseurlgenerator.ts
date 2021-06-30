import { Injectable } from '@angular/core';
import { GlobalProvider } from '../global/global';

/**
 * @name BaseURLProvider
 * @author Sachin Semlety
 * @description
 * This Class is used to set the global Operations for the app.
**/
@Injectable()
export class BaseURLProvider {
    /*Configuration for the app */
    constructor(public global: GlobalProvider) {
    }

    public setBaseURL(CompanyCode): Promise<any> | null {
        switch (CompanyCode) {
            case 'ISF':
                // this.global.store('PDFURL', '192.168.10.22/staging/');
                return this.global.setBaseURL('baseURL', 'http://10.22.2.31:8080/CORVI_SF_MOB_API/MobileApi/');

            case 'IBL':
                // this.global.store('PDFURL', '192.168.10.22/staging/');
                // return this.global.setBaseURL('baseURL', 'http://10.22.2.31:8080/CORVI_SOMA_MOB_API/MobileApi/');
                return this.global.setBaseURL('baseURL', 'http://mobileapi.somatrans.mu/MobileApi/');

            case 'EFS':
                // this.global.store('PDFURL', '192.168.10.22/staging/');
                return this.global.setBaseURL('baseURL', 'http://212.107.125.154/CORVI_MOB_API/MobileApi/');

            case 'GLX':
                // this.global.store('PDFURL', '192.168.10.22/staging/');
                return this.global.setBaseURL('baseURL', 'http://104.211.244.239/CORVI_MOB_API/MobileApi/');

            case 'HMT':
                // this.global.store('PDFURL', '192.168.10.22/staging/');
                return this.global.setBaseURL('baseURL', 'http://52.172.36.110/Harmes_CORVI_MOB_API/MobileApi/');

            case 'SUD':
                // this.global.store('PDFURL', '192.168.10.22/staging/');
                return this.global.setBaseURL('baseURL', 'http://52.172.36.110/Sudarshan_CORVI_MOB_API/MobileApi/');

            case 'BML':
                // this.global.store('PDFURL', '192.168.10.22/staging/');
                return this.global.setBaseURL('baseURL', 'http://61.95.145.131/CORVI_MOB_API/MobileApi/');

            case 'SIC':
                // this.global.store('PDFURL', '192.168.10.22/staging/');
                return this.global.setBaseURL('baseURL', 'http://223.31.96.135/Corvi_MOB_API/MobileApi/');

            case 'DEM':
                // this.global.store('PDFURL', '192.168.10.22/staging/');
                return this.global.setBaseURL('baseURL', 'http://104.211.164.207/MobileApi/MobileApi/');

            case 'SSF':
                this.global.store('PDFURL', '192.168.10.22/staging/');
                return this.global.setBaseURL('baseURL', 'http://192.168.10.22/StagingMobileApi/MobileApi/');


            default:
                return new Promise((resolve, reject) => {
                    return resolve('');
                });
        }

    }
}
