import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Carer, DataService } from 'src/app/services/data';

@Component({
  selector: 'app-carers',
  templateUrl: './carers.page.html',
  styleUrls: ['./carers.page.scss'],
  standalone: false,
})
export class CarersPage implements OnInit {

  carers: Carer[] = [];

  constructor(private dataService: DataService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    this.dataService.getCarers().subscribe(res => {
      this.carers = res;
    });
  }

  addCarer() {
    this.router.navigateByUrl('/carers-detail');
  }

  editCarer(carer: Carer) {
    this.router.navigateByUrl(`/carers-detail/${carer.id}`);
  }

  async deleteCarer(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar exclusão',
      message: 'Tem certeza que deseja excluir este cuidador?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Excluir',
          handler: () => {
            this.dataService.deleteCarer(id);
          },
        },
      ],
    });
    await alert.present();
  }

}
