import { HttpHeaders } from "@angular/common/http";

export class BaseService {

    public urlBase: string = "https://api.api-futebol.com.br/v1/";

    public httpOptionsJson = {
        headers: new HttpHeaders(
            {
                'Authorization': this.liveToken,
                'Content-Type': 'application/json'
            }
        )
    }
}