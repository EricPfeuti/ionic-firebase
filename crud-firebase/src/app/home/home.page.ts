import { Component } from '@angular/core';

import { DataService, Item } from '../services/data';
import { Data, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  items: Item[] = [];

  constructor(private dataService: DataService, private router: Router, private alertController: AlertController) {}

  ngOnInit() {
    this.dataService.getItems().subscribe(res => {
      this.items = res;
    });
  }

  addItem() {
    this.router.navigateByUrl('/page-detail');
  }

  editItem(item: Item) {
    this.router.navigateByUrl(`/page-detail/${item.id}`);
  }

  async deleteItem(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar exclusão',
      message: 'Tem certeza que deseja excluir este item?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Excluir',
          handler: () => {
            this.dataService.deleteItem(id);
          },
        },
      ],
    });
    await alert.present();
  }

}
