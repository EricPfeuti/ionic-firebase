import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService, Pet } from 'src/app/services/data';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.page.html',
  styleUrls: ['./pets.page.scss'],
  standalone: false,
})
export class PetsPage implements OnInit {

  pets: Pet[] = [];

  constructor(private dataService: DataService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    this.dataService.getPets().subscribe(res => {
      this.pets = res;
    });
  }

  addPet() {
    this.router.navigateByUrl('/pets-detail');
  }

  editPet(pet: Pet) {
    this.router.navigateByUrl(`/pets-detail/${pet.id}`);
  }

  async deletePet(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar exclusão',
      message: 'Tem certeza que deseja excluir este pet?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Excluir',
          handler: () => {
            this.dataService.deletePet(id);
          },
        },
      ],
    });
    await alert.present();
  }

}
