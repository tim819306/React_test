class Metadata{
	constructor(title,dataIndex,className){
		this.title = title;
		this.dataIndex = dataIndex;
		this.className = className;
	}
}
function getMetadate(){
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

export default getMetadate;