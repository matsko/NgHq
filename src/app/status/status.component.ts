import { HostBinding, Component, Input } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  @Input('status')
  public status: string = '';

  @HostBinding('class')
  get className() {
    let className = 'result';
    switch (this.status) {
      case this.STATUS_PASSING:
        return className + ' is-passing';
      case this.STATUS_FAILING:
        return className + ' is-failing';
    }
    return className;
  }

  public STATUS_PASSING = 'passing';
  public STATUS_FAILING = 'failing';
}
