var clothesTypes=[];
$(function() {
	getDiyProduct();
	
	$(document).on('click','.js_customOptionList1 ul li',function(){
		$(this).addClass('on').siblings().removeClass('on');
		var typeId=$(this).attr("data-id");
		findClothesTypeProduct(typeId);
	})
	$(document).on('click','.js_customOptionList2 ul li',function(){
		$(this).addClass('on').siblings().removeClass('on');
		var maintenanceId=$(this).attr("data-maintenanceId");
		initpager2(maintenanceId);
	})
	
	
	initpager();
	
});
function initpager(){
	$.get('../../service/iDynamicMaintenance/findUniqueNumber', function(res) {
		if(res.code == 1){
			for (var i = 0; i < res.data.length; i++) {
				$("#brendPagerType").append("<li  data-maintenanceId="+res.data[i].maintenanceId+">"+res.data[i].showName+"</li>");
			}
			$(".js_customOptionList2 ul li:first-child").click();
		}
	}, 'json');
}

function initpager2(maintenanceId){
	$('#pager').kkpager({
		url : '../../service/iDynamicMaintenance/pageMaintenanceId',
		pno : 1,
		pageSize : 10,
		mode : 'click',
		beforeAjax : function() {
			this.params = {maintenanceId:maintenanceId};
		},
		callback : function(data) {
			$('#dynamicMaintenanceTmpList').html("");
			$('#dynamicMaintenanceTmpList').append($('#dynamicMaintenanceTmp').jqote(data));
            // $("html,body").animate({scrollTop:$('#selectdymChceck').offset().top},0);
		}
    });
}


function findClothesTypeProduct(clothesTypeId) {
	$.getJSON("/service/diyProduct",{isSelling:1,clothesTypeId:clothesTypeId},function(data) {
    	if(data.code == 1 && data.data) {
    		$('#diyProductCtn').html("");
        	$('#diyProductCtn').append($('#productTmp').jqote(data.data.rows));
		}else {
			console.log(data.message);
		}
	});
}
function getDiyProduct() {
	$.getJSON("/service/diyProduct",{isSelling:1},function(data) {
    	if(data.code == 1 && data.data) {
        	$('#diyProductCtn').append($('#productTmp').jqote(data.data.rows));
        	for (var i = 0; i < data.data.rows.length; i++) {
				var temp=data.data.rows[i];
				var mark=true;
				if(clothesTypes.length > 0){
					for (var j = 0; j < clothesTypes.length; j++) {
						var clothSplit=clothesTypes[j].split("###");
						if(temp.clothesTypeVO.typeId == clothSplit[0]){
							mark=false;
							break;
						}
					}	
				}
				if(mark){
					clothesTypes.push(temp.clothesTypeVO.typeId+"###"+temp.clothesTypeVO.typeName);
					$("#diyClothesType").append("<li data-id="+temp.clothesTypeVO.typeId+">"+temp.clothesTypeVO.typeName+"</li>");
				}
        	}
		}else {
			console.log(data.message);
		}
	});
}