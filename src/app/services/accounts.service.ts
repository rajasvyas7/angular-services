import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService {
    accounts = [{
        name: 'Master Account',
        status: 'active'
    },
    {
        name: 'Testaccount',
        status: 'inactive'
    },
    {
        name: 'Hidden Account',
        status: 'unknown'
    }];

    constructor(private loggingService: LoggingService) { }

    onStatusChange = new EventEmitter<string>();

    addAccounts(name: string, status: string) {
        const newAccount = {
            name: name,
            status: status
        }
        this.accounts.push(newAccount);
        this.loggingService.logStatusChange(status);
    }

    updateStatus(accountId: number, status: string) {
        this.accounts[accountId].status = status;
        this.loggingService.logStatusChange(status);
    }

}