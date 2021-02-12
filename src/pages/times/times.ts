import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrasileiroProvider } from '../../providers/brasileiro/brasileiro';


@IonicPage()
@Component({
  selector: 'page-times',
  templateUrl: 'times.html',
})
export class TimesPage implements OnInit{

  public times: any[];
  public form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private brasileiroProvider: BrasileiroProvider, private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.createForm();
    this.brasileiroProvider.getTimes().subscribe(
      sucesso => {
        this.times = sucesso
        console.log(this.times);

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
