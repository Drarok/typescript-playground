/// <reference path="Controllers.ts" />

namespace Application {

    class App {
        constructor() {
        }

        doSomething(ctrl: Application.Controllers.IController): string {
            return ctrl.render();
        }
    }

    let app = new App();
    console.log(app.doSomething(new Application.Controllers.HomeCtrl()));
    console.log(app.doSomething(new Application.Controllers.UserCtrl()));
}
