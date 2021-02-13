import { HttpHeaders } from "@angular/common/http";

export class BaseService {



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