import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { BrasileiroProvider } from '../../providers/brasileiro/brasileiro';
import { TimesPage } from '../times/times';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    BrasileiroProvider
  ]
})
export class HomePage implements OnInit {

  public form: FormGroup;
  public campeonatos: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private brasileiroProvider: BrasileiroProvider, private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.createForm();
    this.carregarCampeonatos();
    
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
      acessar: [""]
    });
  }

  public carregarCampeonatos(){
    this.brasileiroProvider.getBrasileiro().subscribe(
      sucesso => {
        this.campeonatos = sucesso
        console.log(this.campeonatos);

      },
      erro => {
        console.log(erro);
      }
    )
  }

  public acessarCampeonato(campeonato: any){
    this.navCtrl.push(TimesPage,{
      campeonato: campeonato.campeonato_id
    })
  }

}
