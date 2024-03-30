import { Component, Input, inject } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.service';

//here we are using alternative way of dependecny injection apart form initialsation in the constructor arguments

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  
  private logService?: LoggingService;

  constructor(private accountService: AccountsService) {
    this.logService = inject(LoggingService);
  }

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountService.updateStatus(this.id, status);
    // this.logService.logStatusChange(status);
    // console.log('A server status changed, new status: ' + status);

    this.accountService.onStatusChange.emit(status);
  }
}
