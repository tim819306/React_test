
import React from "react";
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css";
import { MenuOutlined } from '@ant-design/icons';
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import { Button,Table } from 'antd';


const DragHandle = sortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);
function changeOrderStatus(event){
	event.target.parentNode.parentNode.nextSibling.textContent = "已派工";
	event.target.parentNode.parentNode.nextSibling.style.color = "blue";
}
class SortableTable extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			dataSource: this.props.data,
			metadata: this.props.metadata
		};
    }
    /*onSortEnd = ({ oldIndex, newIndex }) => {
    	const { dataSource } = this.state;
    	if (oldIndex !== newIndex) {
    		const newData = arrayMove([].concat(dataSource), oldIndex, newIndex).filter(el => !!el);
        	console.log('Sorted items: ', newData);
        	this.setState({ dataSource: newData });
    	}
    };
    DraggableContainer = props => (
    	<SortableContainer
    		useDragHandle
        	disableAutoscroll
        	helperClass="row-dragging"
        	onSortEnd={this.onSortEnd}
        	{...props}
      	/>
    );
  
    DraggableBodyRow = ({ className, style, ...restProps }) => {
      	const { dataSource } = this.state;
      	const index = dataSource.findIndex(x => x.index === restProps['data-row-key']);
      	return <SortableItem index={index} {...restProps} />;
    };*/
  
    render() {
      	const { dataSource } = this.state;
      	return (
        	<Table
          		pagination={false}
          		columns={this.props.metadata}
				dataSource ={this.props.data}
          		rowKey="index"
          		components={
					{
						body: {
							wrapper: this.DraggableContainer,
							row: this.DraggableBodyRow,
						}
					}
				}
        	/>
      	);
    }
}

export default SortableTable