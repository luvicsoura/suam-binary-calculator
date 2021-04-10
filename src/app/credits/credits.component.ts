import { Component, OnInit } from '@angular/core';
import { TeamMember } from './team-member';
import { TEAM_MEMBERS } from './team-members';


@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent {

  teamMembers: TeamMember[] = TEAM_MEMBERS;
}
