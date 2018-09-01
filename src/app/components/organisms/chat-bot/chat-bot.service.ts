import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'


export interface ChatBotObject {
  show : boolean;
  error : boolean;
  umsg : String ;
  uform : String ;
  uid : String ;
}

@Injectable()
export class ChatBotService {

  /**
   * @hidden
   */
   
  constructor(private httpClient: HttpClient) { }


  public get(url, options) {
    return this.httpClient.get<ChatBotObject>(url, options)
  }
    public post(url, options) {
    return this.httpClient.post<ChatBotObject>(url, options)
  }

}
