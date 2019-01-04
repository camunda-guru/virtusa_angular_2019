
import {Component, Input, OnInit, ViewChild} from "@angular/core";

import {Form, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import {MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";
import {CountryService} from "../services/countryservice";
import {State} from "../models/state";
import {ERICUSER} from "../models/ericuser";

@Component({
    selector:'daimler-newrequest',
    templateUrl:'newrequest.component.html',
    styleUrls:['newrequest.component.css']
})
export class NewRequestComponent implements OnInit
{
    selectedGender:string="Male";
    selectedCountryValue:string;
    selectedStateValue:string;
    userResponse:string="No Response";
    genderOptions:string[] = [
        'Male',
        'Female'
    ];
    countries:any;
    states:any;
    firstName:FormControl;
    lastName:FormControl;
    email:FormControl;
    dob:FormControl;
    country:FormControl;
    state:FormControl;
    gender:FormControl;
    mobileNo:FormControl;
    regForm:FormGroup;


    constructor(private countryServiceObj:CountryService,private formBuilder:FormBuilder,
                private router:Router,private snackBar:MatSnackBar)
    {
        this. firstName=new FormControl('',
            [Validators.required,
                Validators.pattern('[A-Za-z]{5,25}')
            ]);
        this. lastName=new FormControl('',[Validators.required,
            Validators.pattern('[A-Za-z]{5,25}')
        ]);
        this. email=new FormControl('',
            [Validators.required

            ]);
        this. dob=new FormControl('',
            [Validators.required

            ]);
        // this. country=new FormControl('',[Validators.required,
        //     Validators.pattern('[A-Za-z]{3,50}')
        //]);
        //this. state=new FormControl('',[Validators.required,
        //    Validators.pattern('[A-Za-z]{3,50}')
        // ]);
        //this. gender=new FormControl('',[Validators.required,
        //     Validators.pattern('[A-Za-z]{3,10}')
        // ]);
        this. mobileNo=new FormControl('',
            [Validators.required,
                Validators.pattern('[0-9]{10}')
            ]);

        this.regForm=formBuilder.group({
            firstName:this.firstName,
            lastName:this.lastName,
            email:this.email,
            dob:this.dob,
            mobileNo:this.mobileNo,
            // gender:this.gender
        });

    }
    ngOnInit()
    {
        this.countryServiceObj.getCountries().subscribe(response=>{
            this.countries=response;
            console.log(this.countries);
        })
    }


    selectedCountry(data:any)
    {
        console.log(data.value.alpha3Code);
        this.selectedCountryValue=data.value.name
        this.states=this.countryServiceObj.getAllStatesByCode(data.value.alpha3Code);

       // var stateObj=new State(0,"",data.value.alpha3Code);
        /*this.countryServiceObj.getAllStatesByCode(stateObj)
            .subscribe(response=>{
                console.log(response);
                this.states=response;
            })*/
    }

    selectedState(data:any)
    {
        this.selectedStateValue=data.value.stateName;
    }
    save()
    {
        console.log(this.regForm.value);
        var userObj=new ERICUSER(this.regForm.value.mobileNo,
            this.regForm.value.firstName,
            this.regForm.value.lastName,
            this.regForm.value.dob,
            this.regForm.value.email,
            this.selectedCountryValue,
            this.selectedStateValue,
            this.selectedGender);
        console.log(userObj);
        this.countryServiceObj.addUser(userObj).subscribe(response=>
        {
            console.log(response);
            this.userResponse=response;
            this.snackBar.openFromComponent(SaveRecordComponent, {
                duration: 2000,
            });
           // this.router.navigate(["/Login"]);
        },error => console.log('oops', error))

    }



}


@Component({
    selector: 'snack-bar-component',
    templateUrl: 'register.snack-bar-component.html',
    styles: [`
    .saverecord {
      color: hotpink;
       
    }
  `],
})
export class SaveRecordComponent {
    @Input() message:string


}
