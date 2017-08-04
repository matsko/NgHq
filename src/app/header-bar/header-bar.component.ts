import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent {
  @Output('change')
  changeEmitter = new EventEmitter();

  expanded = false;
  filterCriteria = '';

  options = [
    { type: 'project', title: 'Angular' },
    { type: 'project', title: 'Angular Next Release' },
    { type: 'project', title: 'Material' },
    { type: 'project', title: 'Angular Animations' },
    { type: 'person', title: 'Misko Hevery' },
    { type: 'person', title: 'Igor Minar' },
  ];

  activeArea: string;

  constructor() {
    this.activeArea = this.options[0].title;
  }

  select(option: any) {
    this.activeArea = option.title;
    this.expanded = false;
    this.filterCriteria = '';
    this.informChange();
  }

  toggleExpand() {
    this.expanded = !this.expanded;
  }

  informChange() {
    this.changeEmitter.next(this.activeArea);
  }
}
