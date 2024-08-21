import {Component, inject, OnInit} from '@angular/core';
import {Member} from "../../_models/member";
import {AccountService} from "../../_services/account.service";
import {MembersService} from "../../_services/members.service";
import {RouterLink} from "@angular/router";
import {TabsModule} from "ngx-bootstrap/tabs";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-member-edit',
  standalone: true,
  imports: [
    RouterLink,
    TabsModule,
    FormsModule
  ],
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.css'
})
export class MemberEditComponent implements OnInit{
  member?: Member;
  private accountService = inject(AccountService);
  private memberService = inject(MembersService);

  ngOnInit() {
    this.loadMember();
  }

  loadMember() {
    const user = this.accountService.currentUser();
    if (!user) return;

    this.memberService.getMember(user.username).subscribe({
      next: member => this.member = member
    })
  }
}
