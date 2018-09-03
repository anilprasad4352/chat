import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'


export interface ChatBotObject {
  show : boolean;
  show1 : boolean;
  show2 : boolean;
  error : boolean;
  umsg : String ;
  uform : String ;
  uid : String ;
  botmsg : String ;
  showmeinvoiceamount: boolean;
  showmepaymentdetails: boolean;
}

@Injectable()
export class ChatBotService {

  /**
   * @hidden
   */
   
  constructor(private httpClient: HttpClient) { }


  public get(url, options) {
    return this.httpClient.get<any>(url, options)
  }
    public post(url, options) {
    return this.httpClient.post<any>(url, options)
  }

}
