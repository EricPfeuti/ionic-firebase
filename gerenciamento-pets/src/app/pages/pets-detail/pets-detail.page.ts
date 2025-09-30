import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { DataService, Pet } from 'src/app/services/data';

@Component({
  selector: 'app-pets-detail',
  templateUrl: './pets-detail.page.html',
  styleUrls: ['./pets-detail.page.scss'],
  standalone: false,
})
export class PetsDetailPage implements OnInit {

  pet: Pet = {
    name: '',
    species: '',
    race: '',
    age: 0,
    observations: ''
  }

  petId: string | null = null;
  isNewPet = true;

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router, private loadingController: LoadingController, private toastController: ToastController) { }

  ngOnInit() {
    this.petId = this.route.snapshot.paramMap.get('id');
    if (this.petId){
      this.isNewPet = false;
      this.loadPet();
    }
  }

  async loadPet() {
    const loading = await this.loadingController.create({
      message: 'Carregando item...'
    });

    await loading.present();

    this.dataService.getPet(this.petId!).subscribe(res => {
      loading.dismiss();
      if (res) {
        this.pet = res;
      } else {
        this.presentToast('Item não encontrado!', 'danger');
        this.router.navigateByUrl('/pets');
      }
    }, err => {
      loading.dismiss();
      this.presentToast('Erro ao carregar pet.', 'danger');
      this.router.navigateByUrl('/pets');
    })

  }

  async savePet() {
    const loading = await this.loadingController.create({
      message: 'Salvando pet...'
    });

    await loading.present();

    if (this.isNewPet) {
      this.dataService.addPet(this.pet).then(() => {
        loading.dismiss();
        this.presentToast('Pet adicionado com sucesso!', 'sucess');
        this.router.navigateByUrl('/pets');
      }, err => {
        loading.dismiss();
        this.presentToast('Erro ao adicionar pet.', 'danger');
      });
    } else {
      this.dataService.updatePet(this.pet).then(() => {
        loading.dismiss();
        this.presentToast('Pet atualizado com sucesso!', 'success');
        this.router.navigateByUrl('/pets');
      }, err => {
        loading.dismiss();
        this.presentToast('Erro ao atualizar pet.', 'danger');
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
