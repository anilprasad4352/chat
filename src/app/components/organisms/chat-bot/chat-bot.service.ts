import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'


export interface ChatBotObject {
  show : boolean;
  show1 : boolean;
  show2 : boolean;
  show3 : boolean;
  show4 : boolean;
  error : boolean;
  umsg : String ;
  uform : String ;
  uid : String ;
  botmsg : String ;
  showmeinvoiceamount: boolean;
  showmepaymentdetails: boolean;
  x1 : any[];
x2 : any[];
x3 : any[];
x4 : any[];
}

@Injectable()
export class ChatBotService {

  /**
   * @hidden
   */
   
  constructor(private httpClient: HttpClient) { }


  public get(url, options) {
    return this.httpClient.get<any>(url, {params: options})
  }
    public post(url, options) {
    return this.httpClient.post<any>(url, {params: options})
  }

}
