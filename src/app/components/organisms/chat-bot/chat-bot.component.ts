import { Component, OnInit } from '@angular/core';
import { ChatBotService } from  './chat-bot.service';

@Component({
  selector: 'chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent implements OnInit {
show : boolean = false;
error : boolean = false;
  constructor(private chatBotService: ChatBotService) { }

  ngOnInit() {
  } 
 title = 'chat';
  umsg = this.umsg;
  uform = '';
  uid = '';
  utemplate = '';
  smia = [];
  public  onChatMe() {	  
	let x = document.getElementById('btn-input') as HTMLInputElement;
	this.umsg = x.value;
	this.uform = '<div class="row msg_container base_sent" style="margin-top: 10px;"><div class="col-md-10 col-xs-10" style="padding: 0px;"> <div class="messages msg_receive" style=" background: white;    padding-top: 6px;    padding-bottom: 11px;padding-left: 15px;padding-right: 5px;border-radius: 2px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);max-width: 100%;"><p>'+this.umsg+'</p>';
	this.uform += '</div></div><div class="col-md-2 col-xs-2 avatar" style="padding: 0px;"><img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive "></div></div>'
	  document.getElementById('msg_container_base').innerHTML = document.getElementById('msg_container_base').innerHTML + this.uform;
	 // document.getElementById('btn-input').value='';
	 this.smia = [];
	  x.value="";	
	 if(this.umsg=="showmeinvoiceamount"){
	let param={'key':this.umsg};
	
	    this.chatBotService.get('https://my-json-server.typicode.com/deepaksoniskr15/kbjavaapp/getIntentDetails?key=showmeinvoiceamount',param).subscribe((data1:  Array<object>) => {
      
	  for(var i=0;i<data1[0].textBoxLabelsAndMessages.length;i++){
		  this.smia.push(data1[0].textBoxLabelsAndMessages[i].textBoxName);
		  
		botmsg += "<div class='input-group'><label for='"+data1[0].textBoxLabelsAndMessages[i].textBoxName+"'>"+data1[0].textBoxLabelsAndMessages[i].textBoxLabel+"</label><input type='text' class='form-control' name='"+data1[0].textBoxLabelsAndMessages[i].textBoxName+"' id='"+data1[0].textBoxLabelsAndMessages[i].textBoxName+"' placeholder='"+data1[0].textBoxLabelsAndMessages[i].placeholder+"' /></div>";  
	  }
	  botmsg += "<div class='input-group' style='width: 100%;text-align: center;padding-bottom: 7px;padding-top: 7px;'><button type='submit' class='btn btn-primary' onclick='angular.element(this).scope().onSmia()' role='button'>Submit</button></div>";
	  
        this.uform = '<div class="row msg_container base_receive" style="margin-top: 10px;"><div class="col-md-2 col-xs-2 avatar" style="padding: 0px;"><img src="https://steemitimages.com/DQmVyhQzqP7TF1SKuDWJkY3HuEGzv3ZpWGzLoJSAk42E81w/Theft-bots.jpg" class=" img-responsive "></div><div class="col-md-10 col-xs-10" style="padding: 0px;"> <div class="messages msg_receive" style=" background: white;padding-left: 5px;padding-right: 5px;border-radius: 2px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);max-width: 100%;">'+botmsg+'';
	this.uform += '</div></div></div>'
	  document.getElementById('msg_container_base').innerHTML = document.getElementById('msg_container_base').innerHTML + this.uform;
    });
	 
	 }
  } 
  
 public onSmia() { 
 alert('hello');
 }
 public onSubmit() { 
	 let cc = document.getElementById('cc') as HTMLInputElement;
	 let uname = document.getElementById('username') as HTMLInputElement;
	 let pwd = document.getElementById('password') as HTMLInputElement;
	let param={'clientCode':cc.value,'userName':uname.value,'password':pwd.value};
	//console.log(param);
	 this.error=false;
	 
	   this.chatBotService.get('https://my-json-server.typicode.com/deepaksoniskr15/kbjavaapp/auth',param).subscribe((data:  Array<object>) => {
      if(data.response=='success'){
		  this.uid = data.userId; 
		  this.show = true; 
		    this.chatBotService.get('https://my-json-server.typicode.com/deepaksoniskr15/kbjavaapp/defaultMessage',param).subscribe((data1:  Array<object>) => {
      let botmsg=data1.message;
        this.uform = '<div class="row msg_container base_receive" style="margin-top: 10px;"><div class="col-md-2 col-xs-2 avatar" style="padding: 0px;"><img src="https://steemitimages.com/DQmVyhQzqP7TF1SKuDWJkY3HuEGzv3ZpWGzLoJSAk42E81w/Theft-bots.jpg" class=" img-responsive "></div><div class="col-md-10 col-xs-10" style="padding: 0px;"> <div class="messages msg_receive" style=" background: white;padding-left: 5px;padding-right: 5px;border-radius: 2px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);max-width: 100%;"><p>'+botmsg+'</p>';
	this.uform += '</div></div></div>'
	  document.getElementById('msg_container_base').innerHTML = document.getElementById('msg_container_base').innerHTML + this.uform;
    });
	
	  }else{
		  this.error=true;
		  let dangerelem = document.getElementById('dangerelem') as HTMLInputElement;
		  dangerelem.innerHTML = data.response;
	  }
        
    });
	 
	
  }

}
