import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Doc, DocsService } from './docs.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  doc$!: Observable<Doc>;

  constructor(private docServie: DocsService) {}

  ngOnInit(): any {
    this.doc$ = this.docServie.getDocs();
  }
}
