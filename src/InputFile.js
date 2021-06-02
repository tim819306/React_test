import React from 'react';
import ReactDOM from 'react-dom';
import InputFiles from 'react-input-files';
import XLSX from 'xlsx';
import SortableTable from './SortableTable';
import * as script from './Script.js';

class InputFile extends React.Component{
    render(){
        return (
            <div>
                <InputFiles accept={this.props.accept} onChange={this.onImportExcel}>
                    <button className="btn btn-primary">{this.props.name}</button>
                </InputFiles>
            </div>
        );
    };
    onImportExcel = files => {
        const fileReader = new FileReader();
        for (let index = 0; index < files.length; index++)
            fileReader.name = files[index].name;
        fileReader.onload = event => {
            try {
                const fileExt = event.target.name;
                if (fileExt == null)
                    throw RangeError("檔案為空值");
                const { result } = event.target;
                const workbook = XLSX.read(result, { type: "binary" });
                let excel = [];
                excel = excel.concat(
                    XLSX.utils.sheet_to_json(workbook.Sheets['DX'])
                );
                var data = script.getExcel(excel);
                var metadata = script.getMetadate();
                ReactDOM.render(
                    <div>
                        <InputFiles accept={this.props.accept} onChange={this.onImportExcel}>
                            <button className="btn btn-primary">{this.props.name}</button>
                        </InputFiles>
                        <SortableTable data={data} metadata={metadata}/>
                    </div>, 
                    document.getElementById('root'));
            } catch (e) {
                alert(e);
                return;
            }
        };
        fileReader.readAsBinaryString(files[0]);
    };
}
export default InputFile;