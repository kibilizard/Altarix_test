import { Pipe, PipeTransform } from "@angular/core";

export const addZero =  (num: number): string => num < 10 ? '0' + num : num.toString();
@Pipe({name: 'tsToDate'})
export class TsToDatePipe implements PipeTransform {
    transform(value: number): string {
        if (!value) return 'Not Setted';
        let date = new Date(value);
        return `${addZero(date.getDate())}/${addZero(date.getMonth() + 1)}/${date.getFullYear()} ${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
    }
    
}