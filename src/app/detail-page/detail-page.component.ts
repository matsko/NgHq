import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent {
  data = {
    issues: [
      { title: 'issue 1', type: 'issue' },
      { title: 'issue 2', type: 'issue' },
      { title: 'issue 3', type: 'issue' },
      { title: 'issue 4', type: 'issue' },
    ],
    prs: [
      { title: 'pr 1', type: 'pr' },
      { title: 'pr 2', type: 'pr' },
      { title: 'pr 3', type: 'pr' },
      { title: 'pr 4', type: 'pr' },
    ],
    assigned: [
      { title: 'pr X', type: 'pr' },
      { title: 'pr Y', type: 'pr' },
      { title: 'issue ABC', type: 'issue' },
      { title: 'issue DEF', type: 'issue' },
    ]
  };
}
