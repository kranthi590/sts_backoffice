
import {Injectable} from "angular2/core";
import {HttpService} from "./base_http.service";
import {User} from "../models/profile.model";


@Injectable()
export class UsersService{

    user : User;
    constructor(private httpService : HttpService){

    }

    findByEmail(email : string) {
        console.log("Form Submitted... , Email :: ",email);

        return this.httpService.getApiCall("http://localhost:8080/users/get/byemail/"+email);

    }


}