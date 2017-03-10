namespace Application.Controllers {

    export interface IController {
        render(): string;
    }

    export class HomeCtrl implements IController {
        constructor() {
        }

        render(): string {
            return 'HomeCtrl.render';
        }
    }

    export class UserCtrl implements IController {
        constructor() {
        }

        render(): string {
            return 'UserCtrl.render';
        }
    }

}
