import {Component} from "@angular/core";

import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../services/service.authenticationservice";


@Component({
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent{

    invalidCredentialMsg: string;
    constructor(private authService: AuthService, private router: Router) {
    }
    loginForm = new FormGroup({
        dob:new FormControl(),
        mobileNo:new FormControl()
    });
    onFormSubmit() {

/*

http.get('/path/to/resource')
  .subscribe((res:Response) => {
    console.log(res.headers);
    // you can assign the value to any variable here
  });


 */
        this.authService.isUserAuthenticated(this.loginForm.value).subscribe(
            authenticated => {
                console.log(authenticated);
                if((authenticated.headers[0].value)=="success") {
                    let url =  this.authService.getRedirectUrl();
                    console.log('Redirect Url:'+ url);
                    this.authService.isloggedIn = true;
                    this.authService.loggedInUser = this.loginForm.value;
                    this.router.navigate([ url ]);
                } else {
                    this.invalidCredentialMsg = 'Invalid Credentials. Try again.';
                }
            }
        );
    }
}
