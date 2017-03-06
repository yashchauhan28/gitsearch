import { Component } from '@angular/core';
import { SearchService } from '../service/search.service';

@Component({
  moduleId : module.id,
  selector: 'user',
  template: `
  	<div class = "row">
  <div class = "col-md-12">
    <form>
      <div class = form-group>
        <input type = "text" class = "form-control" name="username" [(ngModel)]="username"  (keyup) = "search()" />
      </div>
    </form>
  </div>
</div>

<div *ngIf="users">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">{{users.name}}</h3>
        </div>
        <div class="panel-body">
            <div class="row">
                <div class="col-md-4">
                    <img class="img-thumbnail github-avatar" src="{{users.avatar_url}}">
                </div>
                <div class="col-md-8">
                    <div class="stats">
                    <span class="label label-default">{{users.public_repos}} Public Repos</span>
                    <span class="label label-primary">{{users.public_gists}} Public Gists</span>
                    <span class="label label-success">{{users.followers}} Followers</span>
                    <span class="label label-info">{{users.following}} Following</span>
                    </div>
                    <br>
                    <ul class="list-group">
                        <li class="list-group-item"><strong>Username: </strong>{{users.login}}</li>
                        <li class="list-group-item"><strong>Location: </strong>{{users.location}}</li>
                        <li class="list-group-item"><strong>Email: </strong>{{users.email}}</li>
                        <li class="list-group-item"><strong>Blog: </strong>{{users.blog}}</li>
                        <li class="list-group-item"><strong>Member Since: </strong>{{users.created_at}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">Repos</h3>
        </div>
        <div class="panel-body">
            <div class="row">
                <div class="col-md-12">
                    <div *ngFor="let repo of repos">
                        <div class="row">
                            <div class="col-md-9">
                                <h4><a href="{{repo.html_url}}" target="_blank">{{repo.name}}</a></h4>
                                <p>{{repo.description}}</p>
                            </div>
                            <div class="col-md-3">
                                <span class="label label-default">{{repo.watchers}} Watchers</span>
                                <span class="label label-primary">{{repo.forks}} Forks</span>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
   </div>
</div>

  `,
  providers : [SearchService]
})

export class UserComponent  {
  users : any;
  repos : any;
  username : string;
  constructor(private searchService : SearchService){
    this.username = "";
  }

  search(){
    //console.log("searching...");
    this.searchService.updateUsername(this.username);

    this.searchService.getUser().subscribe(users => {
      //console.log(users);
      this.users = users;
    });

    this.searchService.getRepo().subscribe(repos => {
      //console.log(repos);
      this.repos = repos;
    });

  }

}
