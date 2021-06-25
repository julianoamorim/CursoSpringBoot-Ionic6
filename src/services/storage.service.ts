import { STORAGE_KEYS } from './../config/storage_keys.config';
import { Injectable } from "@angular/core";
import { LocalUser } from "src/models/local_user";
import { Cart } from 'src/models/cart';

//Pega o usuario q esta salvo localmente no app/browser
@Injectable()
export class StorageService{

    //localStorage: armazenamento local do brownser/app
    getLocalUser(): LocalUser{
        let user = localStorage.getItem(STORAGE_KEYS.localUser);
        if(user == null){
            return null
        }
        else{
            return JSON.parse(user);
        }
    }

    setLocalUser(obj: LocalUser){
        if(obj == null){
            localStorage.removeItem(STORAGE_KEYS.localUser) //caso o usuario nao existe remove do localStorage
        }
        else{
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj))
        }
    }  

    getCart(): Cart{
        let user = localStorage.getItem(STORAGE_KEYS.cart);
        if(user == null){
            return null
        }
        else{
            return JSON.parse(user);
        }
    }

    setCart(obj: Cart){
        if(obj == null){
            localStorage.removeItem(STORAGE_KEYS.cart) 
        }
        else{
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj))
        }
    }  
}