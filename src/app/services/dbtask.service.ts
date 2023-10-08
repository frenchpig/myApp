import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';


const userKey = 'UsuariosDB'
@Injectable({
  providedIn: 'root'
})
export class DBTaskService {

  constructor() { }

  async setItem(llave:string,valor:string){
    await Preferences.set({key:llave,value:valor})
  }

  async getItem(llave:string):Promise<string | null>{
    const obj = await Preferences.get({key:llave});
    return obj.value;
  }

  async registerUser(user:any[]){
    var userStorage = await this.getAllUsers();
    for (const i of userStorage) {
      if (i) {
        user.push(i);
      }
    }
    this.setItem(userKey,JSON.stringify(user));
  }

  async returnOneUser(user:any){
    var msg = '';
    var estado= false;
    var userDB = await this.getAllUsers();
    if(userDB.length===0){
      return null;
    }
    var userObj = user[0];

    for (let u of userDB){
      if (u.username===userObj.username){
        return u;
      }
    }

    return null;
  }

  async getAllUsers(){
    const data = await this.getItem(userKey);
    if(data==null){
      return [];
    }
    const dataArray:any[] = JSON.parse(data);

    if (dataArray) {
      return dataArray;
    } else {
      return [];
    }
  }

}

