import { Component} from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private logService: LoggingService, private accountService: AccountsService) {
    this.accountService.onStatusChange.subscribe((status: string) => {
      alert(`The status has been updated to ${status}`);
    });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accountService.addAccounts(accountName, accountStatus);
    // this.logService.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }   
}
