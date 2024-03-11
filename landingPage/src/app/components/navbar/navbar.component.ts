import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  inOutMenu (){
    const menu = document.querySelector("#menu");
    const icono = document.querySelector(".fa-solid");

    menu?.classList.toggle("hidden");
    icono?.classList.toggle("fa-xmark");
  }

  menuNavegar(){
    console.log("hola link")
    const menu = document.querySelector("#menu");
    const icono = document.querySelector(".fa-solid");

    menu?.classList.toggle("hidden");
    icono?.classList.toggle("fa-xmark");
  }

}
