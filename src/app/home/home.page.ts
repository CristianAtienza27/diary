import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonList,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { happyOutline, leafOutline, sunnyOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonChip,
    IonContent,
    IonHeader,
    IonIcon,
    IonLabel,
    IonList,
    IonMenuButton,
    IonTitle,
    IonToolbar,
  ],
})
export class HomePage {
  readonly entries = [
    {
      id: 1,
      title: 'Mañana junto al mar',
      date: new Date('2024-04-18'),
      summary:
        'Un paseo temprano por la playa con el sonido de las olas y un café caliente en la mano. La brisa salada fue el mejor despertar.',
      mood: 'Serenidad',
      icon: 'sunny-outline',
      color: 'warning',
    },
    {
      id: 2,
      title: 'Tarde creativa',
      date: new Date('2024-04-20'),
      summary:
        'Pasé varias horas pintando y experimentando con nuevos colores. Terminé con una obra que me hizo sentir orgullosa.',
      mood: 'Inspiración',
      icon: 'leaf-outline',
      color: 'success',
    },
    {
      id: 3,
      title: 'Cena en familia',
      date: new Date('2024-04-22'),
      summary:
        'Cocinamos juntos una receta nueva. Entre risas y anécdotas, recordamos por qué estos momentos valen oro.',
      mood: 'Alegría',
      icon: 'happy-outline',
      color: 'tertiary',
    },
  ];

  constructor() {
    addIcons({ happyOutline, leafOutline, sunnyOutline });
  }
}
