import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'; // For rxjs 6
import { AuthResponse } from 'src/models/auth-response.models';
import { Product } from 'src/models/product.models';
import { Profile } from 'src/models/profile.models';

@Injectable({
    providedIn: 'root'
})
export class MyEventsService {
    private selectedLanguage = new Subject<string>();
    private authResponse = new Subject<AuthResponse>();
    private profile = new Subject<Profile>();
    private updatePoductStatus = new Subject<Product>();

    constructor() { }

    public getLanguageObservable(): Observable<string> {
        return this.selectedLanguage.asObservable();
    }

    public setLanguageData(data: string) {
        this.selectedLanguage.next(data);
    }

    public getLoginObservable(): Observable<AuthResponse> {
        return this.authResponse.asObservable();
    }

    public setLoginData(data: AuthResponse) {
        this.authResponse.next(data);
    }

    public getProfileObservable(): Observable<Profile> {
        return this.profile.asObservable();
    }

    public setProfileData(data: Profile) {
        this.profile.next(data);
    }

    public getUpdatePoductObservable(): Observable<Product> {
        return this.updatePoductStatus.asObservable();
    }

    public setUpdatePoductData(data: Product) {
        this.updatePoductStatus.next(data);
    }
}
