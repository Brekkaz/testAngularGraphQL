import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    let LOGIN = gql`mutation{
      login(input: {
        email: "admin@admin.com",
        password: "password"
      }){
        tokenAccess
      }
    }`;
    this.apollo.mutate({
      mutation: LOGIN,
    }).subscribe(res => console.log(res))
  }
}
