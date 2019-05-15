import { Component } from "@angular/core";
import { EXAM_DATA } from "../mock/table_data_mock";
import { ItemType, ISystenHealthItem, IChangeGroupItem, ISystenHeatItem, IDistressItem, IBirthItem, IHerdEntryItem, ICalvingItem, IBreedingItem, IDryOffItem, IDialogResult } from "../models/models";
import { MatDialog } from "@angular/material/dialog";
import { EditComponent } from "./edit/edit.component";

@Component({
    selector:'exam-table',
    templateUrl:'./exam_table.component.html'
})
export class ExamTableComponent {
    public tableData = EXAM_DATA.result;

    constructor (public dialog: MatDialog){}

    openDialog(item?: ItemType): void {
        const dialogRef = this.dialog.open(EditComponent, {
          width: '800px',
          data: item
        });
    
        dialogRef.afterClosed().subscribe((result: IDialogResult) => {
            if (!!item) {
                let index = this.tableData.indexOf(item);

                if (result.action === 'DELETE') {
                    this.tableData.splice(index,1);
                } else if (result.action === 'SAVE'){
                    this.tableData[index] = result.item;
                }
            } else if (result.action === 'SAVE') {
                let indexes = this.tableData.map(item => item.eventId);
                let newItem = result.item;

                newItem.eventId = Math.max(...indexes) + 1;
                let date = new Date();
                newItem.reportingDateTime = date.getTime();
                this.tableData.unshift(newItem);
            }
          console.log('The dialog was closed', result);
        });
      }

    public getDescription = (item: ItemType) => {
        switch(item.type){
            case "changeGroup": {
                item = item as IChangeGroupItem;
                return `New Group: ${item.newGroupName}`;
            }
            case "systemHealth": {
                item = item as ISystenHealthItem;
                return `Health Index: ${item.healthIndex}`;
            }
            case "systemHeat": {
                item = item as ISystenHeatItem;
                return `Heat Index: ${item.heatIndexPeak}`;
            }
            case "distress": {
                item = item as IDistressItem;
                return `Duration: ${item.duration}`;
            }
            case "birth": {
                item = item as IBirthItem;
                return `Birth Date Calculated: ${item.birthDateCalculated}`;
            }
            case "herdEntry": {
                item = item as IHerdEntryItem;
                return `Status: ${item.cowEntryStatus}`;
            }
            case "calving": {
                item = item as ICalvingItem;
                return `New Lactation Number: ${item.lactationNumber}`;
            }
            case "breeding": {
                item = item as IBreedingItem;
                return `Breeding Number: ${item.breedingNumber}`;
            }
            case "dryOff": {
                item = item as IDryOffItem;
                return `Days In Pregnancy: ${item.daysInPregnancy}`;
            }
        }
    }

}
