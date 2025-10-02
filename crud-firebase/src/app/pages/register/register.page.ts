import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage{

  email = '';
  senha = '';

  constructor(private authService: AuthService, private router: Router, private toastController: ToastController, private loadingController: LoadingController) { }

  async cadastrar() {
    const loading = await this.loadingController.create({ message: 'Cadastrando...' });
    await loading.present();

    try {
      await this.authService.registrer(this.email, this.senha);
      await loading.dismiss();
      this.presentToast('Cadastro realizado com sucesso!', 'success');
      this.router.navigateByUrl('/login');
    } catch (error: any) {
        await loading.dismiss();
        this.presentToast('Erro ao cadadastrar: ' + error.message, 'danger');
    }
  }

  async presentToast(message: string, color: string = 'primary') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color
    });
    toast.present();
  }

}
