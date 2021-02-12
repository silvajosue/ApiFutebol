import { HttpHeaders } from "@angular/common/http";

export class BaseService {

    public urlBase: string = "https://api.api-futebol.com.br/v1/";

    public liveToken = "Bearer live_c7655a40d47c6da56cacd686d82d18";

    public token = 'Bearer test_902216bb44436ee52f5c78e67ae167';

    public httpOptionsJson = {
        headers: new HttpHeaders(
            {
                'Authorization': this.token,
                'Content-Type': 'application/json'
            }
        )
    }
}