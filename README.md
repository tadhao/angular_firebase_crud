# AngularFirebaseCrud

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Initial components to install
```sh
$ npm install --save firebase @angular/fire
$ npm install -g firebase-tools
```

## Modules to import in `app.module.ts`
```sh
  import { AngularFireModule } from '@angular/fire';
  import { AngularFireDatabaseModule } from '@angular/fire/database';
  import { environment } from '../environments/environment';
```

## Add credentials to `app/enviroments/enviroment.ts`
```sh
export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: "AIzaXXX",
    authDomain: "angular-fXXX",
    databaseURL: "https://angular-XXX", 
    projectId: "angular-XXX",
    storageBucket: "angular-XXX",
    messagingSenderId: "33266XXX",
    appId: "1:3326607XXX",
    measurementId: "G-CQ03XXX"
  }
};
```

## Import modules in `app.module.ts`
```sh
imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
```

## Get listed values in desired page(ex. `app.component.ts`)
```sh
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
export class AppComponent {
  title = 'angular-firebase-crud';

  constructor(private db: AngularFireDatabase) {
    this.db.list('/books').valueChanges().subscribe((datas) => { console.log("datas", datas) },(err)=>{ console.log("probleme : ", err) });
  }
}
```
### Cheers!