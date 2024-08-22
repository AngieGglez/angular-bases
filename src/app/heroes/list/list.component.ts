import { Component, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string [] = ['Caramelito de Wasabi', 'Iroman','Aquaman', 'Wonder Woman', 'Superman'];
  public deleteHeto?: string;

removeLastHero():void{
 this.deleteHeto =  this.heroNames.pop();
}

}
