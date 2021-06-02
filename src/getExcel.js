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

function getExcel(excel){
    var data = [];
    //任務編號task_id
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
export default getExcel;
