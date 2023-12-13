import moment from "moment";
import {utils, writeFileXLSX} from "xlsx";

export const convertUtcToLocalTime = (date:number)=>{
  return moment(date).format('HH:mm')
}

export const exportXSLX = (json:any[], name: string)=>{
  const ws = utils.json_to_sheet(json);
  /* create workbook and append worksheet */
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, "Data");
  /* export to XLSX */
  writeFileXLSX(wb, `${name}.xlsx`);
}