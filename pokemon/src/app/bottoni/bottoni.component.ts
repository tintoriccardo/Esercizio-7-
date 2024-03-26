
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-bottoni',
  standalone: true,
  imports:[CommonModule],
  templateUrl:'./bottoni.component.html',
  styleUrl: './bottoni.component.css'
})
export class BottoniComponent{
 page:string='home'
  nome1:string='snivy'
  nome2:string='tepig'
  nome3:string='oshawott'
  tipo1:string='erba'
  tipo2:string='fuoco'
  tipo3:string='acqua'
  altezza1:string='0,33cm'
  altezza2:string='0,66cm'
  altezza3:string='11m'
  percorso1:string='corso como'
  percorso2:string='porta garibaldi'
  percorso3:string='via fulvio testi'
  bottonesnivy(event:any){
this.page='snivy'
  }
  bottonetepig(event:any){
    this.page='tepig'
    
  }
  bottoneoshawott(event:any){
    this.page='oshawott'
  }
  bottonehome(event:any){
    this.page='home'
  }
}