import { Component, OnInit } from '@angular/core';
import { ChatBotService } from  './chat-bot.service';


@Component({
  selector: 'chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent implements OnInit {
show : boolean = false;
show1 : boolean = false;
show2 : boolean = false;
error : boolean = false;
displayddl : String = 'none';
displaydd2 : String = 'none';
showmepaymentdetails : boolean = false;
showmeinvoiceamount : boolean = false;
  constructor(private chatBotService: ChatBotService) { }

  ngOnInit() {
  } 
 title = 'chat';
  umsg = this.umsg;
  uform = '';
  uid = '';
  utemplate = '';
  botmsg = '';
  smia = [];
  inputvalues = [];
  
  public  onChatMe() {	  
	let x = document.getElementById('btn-input') as HTMLInputElement;
	this.umsg = x.value;
	this.uform = '<div class="row msg_container base_sent" style="margin-top: 10px;"><div class="col-md-10 col-xs-10" style="padding: 0px;"> <div class="messages msg_receive" style=" background: white;    padding-top: 6px;    padding-bottom: 11px;padding-left: 15px;padding-right: 5px;border-radius: 2px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);max-width: 100%;"><p>'+this.umsg+'</p>';
	this.uform += '</div></div><div class="col-md-2 col-xs-2 avatar" style="padding: 0px;"><img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive "></div></div>'
	  document.getElementById('msg_container_base1').innerHTML = document.getElementById('msg_container_base1').innerHTML + this.uform;
	
	 this.smia = [];
	 	
	 if(this.umsg == "showmepaymentdetails"){
         this.show2 =true; 
         this.show1 =false; 
	 } 
	  else if(this.umsg == "showmeinvoiceamount"){ 
         this.show1 =true; 
		 this.show2 =false; 
	
	 } else{
		  let x2= '<div class="row msg_container base_receive" style="margin-top: 10px;"><div class="col-md-2 col-xs-2 avatar" style="padding: 0px;"><img src="https://steemitimages.com/DQmVyhQzqP7TF1SKuDWJkY3HuEGzv3ZpWGzLoJSAk42E81w/Theft-bots.jpg" class=" img-responsive "></div><div class="col-md-10 col-xs-10" style="padding: 0px;"> <div class="messages msg_receive" style=" background: white;padding-left: 5px;padding-right: 5px;border-radius: 2px;padding-top: 2px;padding-bottom: 2px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);max-width: 100%;"><p>Unknown Command</p>';
	x2 += '</div></div></div>'
	 document.getElementById('msg_container_base1').innerHTML = document.getElementById('msg_container_base1').innerHTML + x2;
	 }
	  x.value="";
  } 
  
 public onSmia() { 
 	 let invoiceNumber = document.getElementById('invoiceNumber') as HTMLInputElement;
	 let invoiceDate = document.getElementById('invoiceDate') as HTMLInputElement;
	 let supplierName = document.getElementById('supplierName') as HTMLInputElement;
	 let glDate = document.getElementById('glDate') as HTMLInputElement;
	let param={'invoiceNumber':invoiceNumber.value,'invoiceDate':invoiceDate.value,'supplierName':supplierName.value,'glDate':glDate.value};
	
	 this.error=false;
	 
	   this.chatBotService.get('https://my-json-server.typicode.com/deepaksoniskr15/kbjavaapp/getDataByParams',param).subscribe((data:  any) => {
		   
      let x2='<div class="row msg_container base_sent"><div class="messages msg_receive"><table class="table table-bordered table-striped table-condensed table-responsive" style="width:250px;font-size: 7.5px;"><thead><tr>';
	   for(var i=0;i<7;i++){
		   x2 += "<th>"+data.headers[0]+"</th>";
	   }
        x2 += "</tr></thead><tbody>";
		
		 for(var i=0;i<data.values.length;i++){
			
		   x2 += "<tr>";
		    console.log(data.values[i].length);
		   for(var j=0;j<7;j++){
			  
			   x2 += "<td>"+data.values[i][j]+"</td>";
		   }
		   
		   x2 += "</tr>";
	   }
	   x2 += "</tbody></table></div></div>";
	   console.log(data);
	   console.log(x2);
		document.getElementById('msg_container_base1').innerHTML = document.getElementById('msg_container_base1').innerHTML + x2;
		this.show1 =false; 
		 this.show2 =false;
    });
	
	
 }
  public onSmid() { 
	 let paymentNumber = document.getElementById('paymentNumber') as HTMLInputElement;
	 let paymentDate = document.getElementById('paymentDate') as HTMLInputElement;
	 let invoiceNumber = document.getElementById('invoiceNumberx') as HTMLInputElement;
	
	let param={'paymentNumber':paymentNumber.value,'paymentDate':paymentDate.value,'invoiceNumber':invoiceNumber.value};
	
	 this.error=false;
	 
	   this.chatBotService.get('https://my-json-server.typicode.com/deepaksoniskr15/kbjavaapp/getDataByParams',param).subscribe((data:  any) => {
		   
      let x2='<div class="row msg_container base_sent"><div class="messages msg_receive"><table class="table table-bordered table-striped table-condensed table-responsive" style="width:250px;font-size: 7.5px;"><thead><tr>';
	   for(var i=0;i<7;i++){
		   x2 += "<th>"+data.headers[0]+"</th>";
	   }
        x2 += "</tr></thead><tbody>";
		
		 for(var i=0;i<data.values.length;i++){
			
		   x2 += "<tr>";
		    console.log(data.values[i].length);
		   for(var j=0;j<7;j++){
			  
			   x2 += "<td>"+data.values[i][j]+"</td>";
		   }
		   
		   x2 += "</tr>";
	   }
	   x2 += "</tbody></table></div></div>";
	   console.log(data);
	   console.log(x2);
		document.getElementById('msg_container_base1').innerHTML = document.getElementById('msg_container_base1').innerHTML + x2;
		this.show1 =false; 
		 this.show2 =false;
    });
 }
 public onSubmit() { 
	 let cc = document.getElementById('cc') as HTMLInputElement;
	 let uname = document.getElementById('username') as HTMLInputElement;
	 let pwd = document.getElementById('password') as HTMLInputElement;
	let param={'clientCode':cc.value,'userName':uname.value,'password':pwd.value};
	
	 this.error=false;
	 
	   this.chatBotService.get('https://my-json-server.typicode.com/deepaksoniskr15/kbjavaapp/auth',param).subscribe((data:  any) => {
      if(data.response=='success'){
		  this.uid = data.userId; 
		  this.show = true; 
		    this.chatBotService.get('https://my-json-server.typicode.com/deepaksoniskr15/kbjavaapp/defaultMessage',param).subscribe((data1:  any) => {
      let botmsg=data1.message;
        this.uform = '<div class="row msg_container base_receive" style="margin-top: 10px;"><div class="col-md-2 col-xs-2 avatar" style="padding: 0px;"><img src="https://steemitimages.com/DQmVyhQzqP7TF1SKuDWJkY3HuEGzv3ZpWGzLoJSAk42E81w/Theft-bots.jpg" class=" img-responsive "></div><div class="col-md-10 col-xs-10" style="padding: 0px;"> <div class="messages msg_receive" style=" background: white;padding-left: 5px;padding-right: 5px;border-radius: 2px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);max-width: 100%;"><p>'+botmsg+'</p>';
	this.uform += '</div></div></div>'
	  document.getElementById('msg_container_base1').innerHTML = document.getElementById('msg_container_base1').innerHTML + this.uform;
    });
	
	  }else{
		  this.error=true;
		  let dangerelem = document.getElementById('dangerelem') as HTMLInputElement;
		  dangerelem.innerHTML = data.response;
	  }
        
    });
	 
	
  }

}
