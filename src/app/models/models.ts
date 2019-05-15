export interface IDialogResult {
	action: DialogAction,
	item: ItemType
}

export type DialogAction = 'DELETE' | 'SAVE' | 'CANCEL'

export interface ISearchData {
    "offset": number,
    "limit": number,
    "total": number,
    "result": ItemType[]
}

export type ItemType = 
IChangeGroupItem | 
ISystenHealthItem |
ISystenHeatItem | 
IDistressItem |
IBirthItem |
IHerdEntryItem |
ICalvingItem |
IBreedingItem |
IDryOffItem |
IUntypedItem

export type ItemTypeNames = 
"changeGroup" | 
"systemHealth" | 
"systemHeat" |
"distress" |
"birth" | 
"herdEntry" |
"calving" |
"breeding" |
"dryOff"

export interface IUntypedItem extends 
IChangeGroupItem, 
ISystenHealthItem, 
ISystenHeatItem, 
IDistressItem, 
IBirthItem, 
IHerdEntryItem, 
ICalvingItem,
IBreedingItem,
IDryOffItem {}

export interface ISearchItem {
    "type": ItemTypeNames,
    "cowId": number,
    "animalId": string,
    "eventId": number,
    "deletable": boolean,
    "lactationNumber": number,
    "daysInLactation": number,
    "ageInDays": number,
    "startDateTime": number,
    "reportingDateTime": number
}

export interface IChangeGroupItem extends ISearchItem{
	"newGroupId": number,
	"newGroupName": string,
	"currentGroupId": number,
	"currentGroupName": string
}
export interface ISystenHealthItem extends ISearchItem {
	"healthIndex": number,
	"endDate": number,
	"minValueDateTime": number,
}
export interface ISystenHeatItem extends ISearchItem {
	"heatIndexPeak": string,
}
export interface IDistressItem extends ISearchItem {
	"alertType": string,
	"duration": number,
	"originalStartDateTime": number,
	"endDateTime": number,
	"daysInPregnancy": number,
}
export interface IBirthItem extends ISearchItem {
    "birthDateCalculated": boolean,
}
export interface IHerdEntryItem extends ISearchItem {
    "destinationGroup": number,
	"destinationGroupName": string,
	"cowEntryStatus": string,
}
export interface ICalvingItem extends ISearchItem {
    "destinationGroup": number,
	"destinationGroupName": string,
	"calvingEase": number,
	"daysInPregnancy": number,
	"oldLactationNumber": number,
	"newborns": number,
}
export interface IBreedingItem extends ISearchItem {
    "sire": number,
	"breedingNumber": number,
	"isOutOfBreedingWindow": boolean,
	"interval": number,
}
export interface IDryOffItem extends ISearchItem {
    "destinationGroup": number,
	"destinationGroupName": string,
	"daysInPregnancy": number,
}
