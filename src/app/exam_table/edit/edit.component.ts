import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ItemType, IUntypedItem } from "../../models/models";
import { FormGroup, FormControl } from "@angular/forms";
import { formArrayNameProvider } from "@angular/forms/src/directives/reactive_directives/form_group_name";


export const NEW_ITEM: IUntypedItem = {
    "type": null,
    "cowId": null,
    "animalId": '',
    "eventId": null,
    "deletable": false,
    "lactationNumber": null,
    "daysInLactation": null,
    "ageInDays": null,
    "startDateTime": null,
    "reportingDateTime": null,
	"newGroupId": null,
	"newGroupName": '',
	"currentGroupId": null,
    "currentGroupName": '',
    "healthIndex": null,
	"endDate": null,
    "minValueDateTime": null,
    "heatIndexPeak": '',
    "alertType": '',
	"duration": null,
	"originalStartDateTime": null,
	"endDateTime": null,
    "daysInPregnancy": null,
    "birthDateCalculated": false,
    "destinationGroup": null,
	"destinationGroupName": '',
    "cowEntryStatus": '',
	"calvingEase": null,
	"oldLactationNumber": null,
    "newborns": null,
    "sire": null,
	"breedingNumber": null,
	"isOutOfBreedingWindow": false,
    "interval": null,
}

@Component({
    selector:'edit',
    templateUrl:'./edit.component.html'
})
export class EditComponent {
    public types = ["changeGroup", "systemHealth", "systemHeat","distress","birth","herdEntry","calving","breeding","dryOff"];
    public isNew: boolean;
    public item: IUntypedItem; 
    public form = new FormGroup({
        type: new FormControl(''),
        cowId: new FormControl(''),
        animalId: new FormControl(''),
        eventId: new FormControl(''),
        deletable: new FormControl(''),
        lactationNumber: new FormControl(''),
        daysInLactation: new FormControl(''),
        ageInDays: new FormControl(''),
        startDateTime: new FormControl(''),
        reportingDateTime: new FormControl(''),
        newGroupId: new FormControl(''),
        newGroupName: new FormControl(''),
        currentGroupId: new FormControl(''),
        currentGroupName: new FormControl(''),
        healthIndex: new FormControl(''),
        endDate: new FormControl(''),
        minValueDateTime: new FormControl(''),
        heatIndexPeak: new FormControl(''),
        alertType: new FormControl(''),
        duration: new FormControl(''),
        originalStartDateTime: new FormControl(''),
        endDateTime: new FormControl(''),
        daysInPregnancy: new FormControl(''),
        birthDateCalculated: new FormControl(''),
        destinationGroup: new FormControl(''),
        destinationGroupName: new FormControl(''),
        cowEntryStatus: new FormControl(''),
        calvingEase: new FormControl(''),
        oldLactationNumber: new FormControl(''),
        newborns: new FormControl(''),
        sire: new FormControl(''),
        breedingNumber: new FormControl(''),
        isOutOfBreedingWindow: new FormControl(''),
        interval: new FormControl(''),
    })

    constructor(
        public dialogRef: MatDialogRef<EditComponent>,
        @Inject(MAT_DIALOG_DATA) public data?: ItemType){
            this.isNew = !data;
            this.item = !!data? Object.assign({},NEW_ITEM, data) : NEW_ITEM;
            this.form.setValue(this.item);

            this.form.valueChanges.subscribe(value => this.item = value);
        };
        
    cancel = () => this.dialogRef.close({
        action: 'CANCEL',
        item: this.item
    });

    deleteData = () => this.dialogRef.close({
        action: 'DELETE',
        item: this.item
    });

    saveData = () => this.dialogRef.close({
        action: 'SAVE',
        item: this.item
    });
}