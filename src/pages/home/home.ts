import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { BrasileiroProvider } from '../../providers/brasileiro/brasileiro';

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

  public createForm(): void {
    this.form = this.formBuilder.group({

    });
  }

}
