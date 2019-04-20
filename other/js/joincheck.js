	$(function(){ 



		$.get('../../service/brandsRest/brandDealerInfoService/checkBusinessFunction', null, function(data){
			if(data.success === true){
				var data = data.data;
				if(data.isAgency != null && data.isAgency != ""){
					$("#agentJoin").val(data.isAgency);
				}
				if(data.isMaterial != null && data.isMaterial != ""){
					$("#fabricJoin").val(data.isMaterial);
				}
				if(data.isBrand != null && data.isBrand != ""){
					$("#brandJoin").val(data.isBrand);
				}
				if(data.isFactory != null && data.isFactory != ""){
					$("#factoryJoin").val(data.isFactory);
				}
				if(data.isShop != null && data.isShop != ""){
					$("#customShopJoin").val(data.isShop);
				}
			}
		},'json');
	});
	
	function clickJoinCode(code){
		if(code == 1){ 
			//定制店入驻
			/*var factory = $("#factoryJoin").val();
			var agent = $("#agentJoin").val();
			var brand = $("#brandJoin").val();
			var fabric = $("#fabricJoin").val();*/
			var customshop=$("#customShopJoin").val();  
			/*if(factory!='0'&& factory!=0 ){
				$.MsgBox.Alert("温馨提示","您已经申请过入驻工厂，不能申请入驻定制店！");
				return false;
			}else if(agent  != '0' && agent  != 0){ 
				$.MsgBox.Alert("温馨提示","您已经申请过入驻代理商，不能申请入驻定制店！");
				return false;
			}else if(brand  != '0' && brand  != 0){ 
				$.MsgBox.Alert("温馨提示","您已经申请过入驻品牌商，不能申请入驻定制店！");
				return false;
			}else if(fabric  != '0' && fabric  != 0){ 
				$.MsgBox.Alert("温馨提示","您已经申请过入驻面料商，不能申请入驻定制店！");
				return false;
			}else */if(customshop  != '0' && customshop  != 0){ 
				$.MsgBox.Alert("温馨提示","您已经申请过入驻定制店，不能申请入驻定制店！");
				return false;
			}else{
				window.location.href = "../../html/business/customShopJoin.html";
			}
		
				
		}else if(code == 2){//面料商入驻
			var fabric = $("#fabricJoin").val();
			/*var agent = $("#agentJoin").val();
			var customshop=$("#customShopJoin").val(); */
			if(fabric != '0' && fabric != 0){
				$.MsgBox.Alert("温馨提示","您已经申请过入驻面料商，请不要重复申请！");
				return false;
			}/*else if(agent != '0' && agent != 0){ //已经是代理商，则不能入驻为品牌商。
				$.MsgBox.Alert("温馨提示","您已经申请过入驻代理商，不能申请入驻面料商！");
				return false;
			}else if(customshop  != '0' && customshop  != 0){ 
				$.MsgBox.Alert("温馨提示","您已经申请过入驻定制店，不能申请入驻面料商！");
				return false;
			}*/else{
				window.location.href = "../../html/business/fabricJoin.html";
			}			
		}else if(code == 3){
			//工厂入驻
			var factory = $("#factoryJoin").val();
			/*var agent = $("#agentJoin").val();
			var customshop=$("#customShopJoin").val();*/
			if(factory!='0'&& factory!=0 ){
				$.MsgBox.Alert("温馨提示","您已经申请过入驻工厂，请不要重复申请！");
				return false;
			}/*else if(agent  != '0' && agent  != 0){ 
				$.MsgBox.Alert("温馨提示","您已经申请过入驻代理商，不能申请入驻工厂！");
				return false;
			}else if(customshop  != '0' && customshop  != 0){ 
				$.MsgBox.Alert("温馨提示","您已经申请过入驻定制店，不能申请入驻工厂！");
				return false;
			}*/else{
				window.location.href = "../../html/business/factoryJoin.html";
			}
			
		}else if(code == 4){
			var brand = $("#brandJoin").val();
			/*var agent = $("#agentJoin").val();
			var customshop=$("#customShopJoin").val()*/;
			//已经申请过了品牌商，则不能再申请品牌商
			if(brand  != '0' && brand  != 0){ 
				$.MsgBox.Alert("温馨提示","您已经申请过入驻品牌商，请不要重复申请！");
				return false;
			}/*else if(agent != '0' && agent != 0){ //已经是代理商，则不能入驻为品牌商。
				$.MsgBox.Alert("温馨提示","您已经申请过入驻代理商，不能申请入驻品牌商！");
				return false;
			}else if(customshop  != '0' && customshop  != 0){ 
				$.MsgBox.Alert("温馨提示","您已经申请过入驻定制店，不能申请入驻品牌商！");
				return false;
			}*/else{
				window.location.href = "../../html/business/brandsJoin.html";
			}		
		}else if(code == 5){
			//代理商 
			/*var brand = $("#brandJoin").val();
			var fabric = $("#fabricJoin").val();
			var agent = $("#agentJoin").val();
			var customshop=$("#customShopJoin").val();
			//已经申请过了品牌商，则不能再申请品牌商
			if(agent  != '0' && agent  != 0){ 
				$.MsgBox.Alert("温馨提示","您已经申请过入驻代理商，请不要重复申请！");
				return false;
			}else if(brand != '0' && brand != 0){ //
				$.MsgBox.Alert("温馨提示","您已经申请过入驻品牌商，不能申请入驻设计师,制版师,服装顾问！");
				return false;
  		  }else if(fabric != '0' && fabric != 0){ //
				$.MsgBox.Alert("温馨提示","您已经申请过入驻面料商，不能申请入驻设计师,制版师,服装顾问！");
				return false;
			}else if(customshop  != '0' && customshop  != 0){ 
				$.MsgBox.Alert("温馨提示","您已经申请过入驻定制店，不能申请入驻设计师,制版师,服装顾问！");
				return false;
			}else{*/
				window.location.href = "../../html/business/index.html";
			//}	
		}else if(code == 6){/*
			//定制店入驻
			var factory = $("#factoryJoin").val();
			var consultant  = $("#consultantJoin").val();
			var agent = $("#agentJoin").val();
			var brand = $("#brandJoin").val();
			var fabric = $("#fabricJoin").val();
			var customshop=$("#customShopJoin").val();  
			if(factory!='0'&& factory!=0 ){
				$.MsgBox.Alert("温馨提示","您已经申请过入驻工厂，不能申请入驻定制店！");
				return false;
			}else if(consultant != '0' && consultant != 0){
				$.MsgBox.Alert("温馨提示","您已经申请过入驻服装顾问，不能申请入驻定制店！");
				return false;
			}else if(agent  != '0' && agent  != 0){ 
				$.MsgBox.Alert("温馨提示","您已经申请过入驻代理商，不能申请入驻定制店！");
				return false;
			}else if(brand  != '0' && brand  != 0){ 
				$.MsgBox.Alert("温馨提示","您已经申请过入驻品牌商，不能申请入驻定制店！");
				return false;
			}else if(fabric  != '0' && fabric  != 0){ 
				$.MsgBox.Alert("温馨提示","您已经申请过入驻面料商，不能申请入驻定制店！");
				return false;
			}else if(customshop  != '0' && customshop  != 0){ 
				$.MsgBox.Alert("温馨提示","您已经申请过入驻定制店，不能申请入驻定制店！");
				return false;
			}else{
				window.location.href = "../../html/business/customShopJoin.html";
			}
		*/}else{
			
		}
	}
	
	function designerJoin(){
		$.MsgBox.Alert("温馨提示","此功能暂未开放，正在施工中！~~~");
	}