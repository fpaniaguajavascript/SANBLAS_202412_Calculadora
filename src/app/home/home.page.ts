import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonInput, IonButton, IonToast, IonAlert } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonInput, IonButton, FormsModule, IonToast, IonAlert],
})
export class HomePage {
  operando1: number | any;
  operando2: number | any;
  resultado: number = 0;
  mostrarToast: boolean = false;
  mostrarResultado : boolean = false;
  alertButtons = ['Cerrar'];
  constructor() {}
  sumar() {
      if (this.verificarOperandos()){
        this.resultado = this.operando1 + this.operando2;
        this.mostrarResultado = true;
      }
  }
  restar() {
    if (this.verificarOperandos()){
      this.resultado = this.operando1 - this.operando2;
      this.mostrarResultado = true;
    }
  }
  multiplicar() {
    if (this.verificarOperandos()){
      this.resultado = this.operando1 * this.operando2;
      this.mostrarResultado = true;
    }
  }
  dividir() {
    if (this.verificarOperandos()){
      this.resultado = this.operando1 / this.operando2;
      this.mostrarResultado = true;
    }
  }
  ocultarToast() {
    this.mostrarToast = false;
  }
  ocultarResultado() {
    this.mostrarResultado = false;
  }
  private verificarOperandos() : boolean {
    if (this.operando1 == null || this.operando2 == null) {
      this.mostrarToast = true;
      return false;
    } else {
      return true;
    }
  }
}
