class MachineInfo{
    constructor(index,taskId,produceBatchNo,productModelNo,currentQuantity,machinePosition){
      this.index = index;
      this.taskId = taskId;
      this.produceBatchNo = produceBatchNo;
      this.productModelNo = productModelNo;
      this.currentQuantity = currentQuantity;
      this.machinePosition = machinePosition;
    }
    key = '';
    action = '';
    currentStatus = '';
    eRackPositionNotTested = '';
    eRackPositionTested = '';
    vp= '50';
  }
class Metadata{
	constructor(title,dataIndex,className){
		this.title = title;
		this.dataIndex = dataIndex;
		this.className = className;
	}
}
export function getExcel(excel){
    var data = [];
    let date = new Date();
    var y = date.getFullYear().toString();
    var m = (date.getMonth()+1).toString();
        if( date.getMonth()+1 <10){
            m = "0" + m;
        }
    var d = date.getDate().toString();
    var i = 0,j,k,count = 0,task_id,batchNo,type,num,machine_position;
    for(;excel.length > i; ++i){
        if(excel[i].hasOwnProperty('矽格股份有限公司')){
            if(excel[i]['矽格股份有限公司'].hasOwnProperty('length')){  
                if(excel[i]['矽格股份有限公司'].indexOf('DX-') > -1){
                    machine_position = excel[i]['矽格股份有限公司'];
                    for(j = i + 2,k = 0;4 > k && excel.length > j && excel[j].hasOwnProperty('__EMPTY_2');++j,++k){
                        task_id =  y + m + d + excel[j].__EMPTY_2;
                        batchNo = excel[j].__EMPTY_2;
                        type = excel[j].__EMPTY_4;
                        num = excel[j].__EMPTY_7;
                        data[count] = new MachineInfo(count,task_id,batchNo,type,num,machine_position);
                        ++count;
                    }
                    if(excel[i].hasOwnProperty('__EMPTY_12')){
                        machine_position = excel[i].__EMPTY_12;
                        for(j = i + 2,k = 0;4 > k && excel.length > j && excel[j].hasOwnProperty('__EMPTY_15');++j,++k){
                            task_id =  y + m + d + excel[j].__EMPTY_15;
                            batchNo = excel[j].__EMPTY_15;
                            type = excel[j].__EMPTY_17;
                            num = excel[j].__EMPTY_20;
                            data[count] = new MachineInfo(count,task_id,batchNo,type,num,machine_position);
                            ++count;
                        }
                    }
                }
            }
        }
    }
    return data;
}
export function getMetadate(){
	var data = [];
	data.push(new Metadata('拖拉','sort','drag-visible'));
	data.push(new Metadata('任務編號','taskId','drag-visible'));
	data.push(new Metadata('生產批號','produceBatchNo'));
	data.push(new Metadata('產品型號','productModelNo'));
	data.push(new Metadata('現況數量','currentQuantity'));
	data.push(new Metadata('機台位置','machinePosition'));
	data.push(new Metadata('操作','action'));
	data.push(new Metadata('派工狀態','currentStatus'));
	data.push(new Metadata('e-Rack櫃位(待測)','eRackPositionNotTested'));
	data.push(new Metadata('e-Rack櫃位(已測)','eRackPositionTested'));
	data.push(new Metadata('優先序','vp'));
	return data;
}


