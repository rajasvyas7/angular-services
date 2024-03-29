import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { LoggingService } from '../logging.service';

//here we are using alternative way of dependecny injection apart form the providers 

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  private logService?: LoggingService;

  constructor() {
    this.logService = inject(LoggingService);
  }

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    this.logService.logStatusChange(status);
    // console.log('A server status changed, new status: ' + status);
  }
}
