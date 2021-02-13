import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrasileiroProvider } from '../../providers/brasileiro/brasileiro';


@IonicPage()
@Component({
  selector: 'page-times',
  templateUrl: 'times.html',
})
export class TimesPage implements OnInit {

  public times: any[];
  public form: FormGroup;
  public campeonatos: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private brasileiroProvider: BrasileiroProvider, private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.createForm();
    this.carregarCampeonato();
    this.carregarTimes();
  }

  public createForm(): void {
    this.form = this.formBuilder.group({

    });
  }
  public carregarTimes(){
    console.log(this.navParams.get('campeonato'))
    this.brasileiroProvider.getTimes(this.navParams.get('campeonato')).subscribe(
      sucesso => {
        this.times = sucesso
        console.log(this.times);

      },
      erro => {
        console.log(erro);
      }
    );
  }

  public carregarCampeonato() {
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

  public voltar(): void{
    this.navCtrl.pop();
  }
}
