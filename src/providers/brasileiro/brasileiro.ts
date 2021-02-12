import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseService } from '../../util/service/BaseService';

@Injectable()
export class BrasileiroProvider extends BaseService{

  constructor(public http: HttpClient) {
    super();
  }

  public getBrasileiro(): Observable<any[]>{
    return this.http.get<any[]>(this.urlBase + 'campeonatos', this.httpOptionsJson);
  }

  public getTimes(): Observable<any[]> {
    return this.http.get<any[]>(this.urlBase + 'campeonatos/' + 10 + '/tabela', this.httpOptionsJson);
  }
}
