import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { CredenciaisDTO } from "../models/credenciais.dto";
import { API_CONFIG } from "../config/api.config";
import { LocalUser } from "../models/local_user";
import { StorageService } from "./storage.service";



@Injectable()
export class AuthService{

    constructor(public http: HttpClient, public storageServce: StorageService){

    }
    authenticate(creds: CredenciaisDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/login`, creds, {
            observe: 'response',
            responseType: 'text'
        })
    }

    successfulLogin(authorizathionValue: string){
        let tok = authorizathionValue.substring(7);
        let user: LocalUser = {
            token: tok
        };
        this.storageServce.setLocalUser(user);

    }
    
    logout(){
        this.storageServce.setLocalUser(null);
    }
}