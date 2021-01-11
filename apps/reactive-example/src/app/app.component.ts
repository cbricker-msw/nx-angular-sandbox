import {Component} from '@angular/core';

@Component({
    selector: 'sandbox-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'reactive-example';

    printUser(event: Event): void {
        console.log(event);
    }

    printError(event: Event): void {
        console.error(event);
    }
}
