import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-firebase-crud';

  constructor(private db: AngularFireDatabase) { 
    
    this.db.list('/books').valueChanges().subscribe((datas) => { console.log("datas", datas) },(err)=>{ console.log("probleme : ", err) });
  }

}
