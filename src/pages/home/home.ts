import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    cards = [
        {
            "imgPath": "basketball.jpg",
            "title": "Hoop",
            "desc": "Quick pause during a game of horse.",
            "favorited": false,
            "shared": false

        },
        {
            "imgPath": "brek.jpg",
            "title": "Brek",
            "desc": "Sunday Funday",
            "favorited": false,
            "shared": false

        },
        {
            "imgPath": "LA.jpg",
            "title": "LA",
            "desc": "I can't wait to visit LA in December!",
            "favorited": false,
            "shared": false

        },
        {
            "imgPath": "lake.jpg",
            "title": "Lake",
            "desc": "Quick dip",
            "favorited": false,
            "shared": false

        },
        {
            "imgPath": "ocean.jpg",
            "title": "Ocean",
            "desc": "I can smell the waves from here.",
            "favorited": false,
            "shared": false

        },
        {
            "imgPath": "oranges.jpg",
            "title": "Oranges",
            "desc": "Famers Market!",
            "favorited": false,
            "shared": false

        },
        {
            "imgPath": "phones.jpg",
            "title": "phone",
            "desc": "#tbt",
            "favorited": false,
            "shared": false

        },
        {
            "imgPath": "road.jpg",
            "title": "road",
            "desc": "*sigh*",
            "favorited": false,
            "shared": false

        },
        {
            "imgPath": "skyline.jpg",
            "title": "Skyline",
            "desc": "my favorite city",
            "favorited": false,
            "shared": false

        },
        {
            "imgPath": "stairs.jpeg",
            "title": "Stairs",
            "desc": "the prettiest stairs",
            "favorited": false,
            "shared": false

        }
    ];


  constructor(public navCtrl: NavController) {

  }

    clickFav(card) {
        //gets index value of card
        let index = this.cards.indexOf(card);
        //if it's true change it to false
        //if it's false change it to true
        if(index > -1){
            if(card.favorited){
                this.cards[index].favorited = false;
            }else{
                this.cards[index].favorited = true;
            }
        }
    }

    clickShare(card) {
        //gets index value of card
        let index = this.cards.indexOf(card);
        //if it's true change it to false
        //if it's false change it to true
        if(index > -1){
            if(card.shared){
                this.cards[index].shared = false;
            }else{
                this.cards[index].shared = true;
            }
        }
    }

    deleteItem(card){
        let index = this.cards.indexOf(card);

        this.cards.splice(index, 1)
    }

}
