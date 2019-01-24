import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-join-group-proposal-view',
  templateUrl: './join-group-proposal-view.component.html',
  styleUrls: ['./join-group-proposal-view.component.css']
})
export class JoinGroupProposalViewComponent implements OnInit {

  private loginUser: User;

  constructor(private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    const obligationGroupId: number = +this.route.snapshot.paramMap.get('obligationGroupId');

    // poll for login user, I need his all registered services here, so that he can pick at least one
    this.userService.getLoggedInUser().subscribe(loginUser => {
      this.loginUser = loginUser;
    });
  }

}
