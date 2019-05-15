import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import {TableModule} from 'primeng/table';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ExamTableComponent } from './exam_table/exam_table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import { HumanizePipe } from './exam_table/humanize.pipe';
import { TsToDatePipe } from './exam_table/ts_to_date.pipe';
import { EditComponent } from './exam_table/edit/edit.component';

@NgModule({
    imports: [
        BrowserModule, 
        TableModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatDialogModule,
        DropdownModule,
        RouterModule.forRoot([
        {
            path: '', component: ExamTableComponent,
        }
    ])],
    declarations: [
        AppComponent,
        ExamTableComponent,
        EditComponent,
        HumanizePipe,
        TsToDatePipe
    ],
    entryComponents: [
        EditComponent
    ],
    providers: [
        {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}