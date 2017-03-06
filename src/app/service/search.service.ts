import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class SearchService{
    username : string;
    constructor(private http : Http){
      this.username = 'yashchauhan28';
    }

    getUser(){
      return this.http.get('https://api.github.com/users/' + this.username)
            .map(res => res.json());
    }

    getRepo(){
      return this.http.get('https://api.github.com/users/' + this.username + '/repos')
            .map(res => res.json());
    }

    updateUsername(username: string){
      this.username = username;
    }

}
