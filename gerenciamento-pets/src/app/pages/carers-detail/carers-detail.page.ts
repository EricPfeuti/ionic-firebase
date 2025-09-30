import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Carer, DataService } from 'src/app/services/data';

@Component({
  selector: 'app-carers-detail',
  templateUrl: './carers-detail.page.html',
  styleUrls: ['./carers-detail.page.scss'],
  standalone: false,
})
export class CarersDetailPage implements OnInit {

  carer: Carer = {
    name: '',
    phoneNumber: 0,
    experience: 0,
    specialties: ''
  }

  carerId: string | null = null;
  isNewCarer = true;

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router, private loadingController: LoadingController, private toastController: ToastController) { }

  ngOnInit() {
    this.carerId = this.route.snapshot.paramMap.get('id');
    if (this.carerId){
      this.isNewCarer = false;
      this.loadCarer();
    }
  }

  async loadCarer() {
    const loading = await this.loadingController.create({
      message: 'Carregando cuidador...'
    });

    await loading.present();

    this.dataService.getCarer(this.carerId!).subscribe(res => {
      loading.dismiss();
      if (res) {
        this.carer = res;
      } else {
        this.presentToast('Cuidador não encontrado!', 'danger');
        this.router.navigateByUrl('/carers');
      }
    }, err => {
      loading.dismiss();
      this.presentToast('Erro ao carregar cuidador.', 'danger');
      this.router.navigateByUrl('/carers');
    })

  }

  async saveCarer() {
    const loading = await this.loadingController.create({
      message: 'Salvando cuidador...'
    });

    await loading.present();

    if (this.isNewCarer) {
      this.dataService.addCarer(this.carer).then(() => {
        loading.dismiss();
        this.presentToast('Cuidador adicionado com sucesso!', 'sucess');
        this.router.navigateByUrl('/carers');
      }, err => {
        loading.dismiss();
        this.presentToast('Erro ao adicionar cuidador.', 'danger');
      });
    } else {
      this.dataService.updateCarer(this.carer).then(() => {
        loading.dismiss();
        this.presentToast('Cuidador atualizado com sucesso!', 'success');
        this.router.navigateByUrl('/carers');
      }, err => {
        loading.dismiss();
        this.presentToast('Erro ao atualizar cuidador.', 'danger');
      });
    }
  }

  async presentToast(message: string, color: string = 'primary') {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color
    });
    toast.present();
  }

}
