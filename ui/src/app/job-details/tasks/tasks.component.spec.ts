import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {Component, DebugElement, ViewChild} from '@angular/core';
import {
  MatButtonModule,
  MatExpansionModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
} from '@angular/material';
import {ClrIconModule, ClrTooltipModule} from '@clr/angular';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TaskDetailsComponent} from './tasks.component';
import {JobMetadataResponse} from '../../shared/model/JobMetadataResponse';
import {JobStatus} from '../../shared/model/JobStatus';
import {SharedModule} from '../../shared/shared.module';
import {TaskMetadata} from "../../shared/model/TaskMetadata";


describe('TaskDetailsComponent', () => {
  let testComponent: TestTasksComponent;
  let fixture: ComponentFixture<TestTasksComponent>;

  let task: TaskMetadata = {
    name: 'task1',
    executionId: '',
    executionStatus: 'Failed',
    start: new Date("2017-11-14T13:00:00"),
    end: new Date("2017-11-14T13:15:00"),
    attempts: 1,
    failures: [],
    returnCode: 0,
    stderr: 'gs://test-bucket/stderr.txt',
    stdout: 'gs://test-bucket/stdout.txt',
    inputs: {},
    jobId: 'subworkflow123'
  }

  let job: JobMetadataResponse = {
    id: 'test-id',
    name: 'test-name',
    status: JobStatus.Failed,
    submission: new Date('2015-04-20T20:00:00'),
    extensions: { tasks: [task] }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TaskDetailsComponent,
        TestTasksComponent
      ],
      imports: [
        BrowserAnimationsModule,
        ClrIconModule,
        ClrTooltipModule,
        CommonModule,
        MatButtonModule,
        MatExpansionModule,
        MatTableModule,
        MatTabsModule,
        MatTooltipModule,
        SharedModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTasksComponent);
    testComponent = fixture.componentInstance;
  });

  it('should display a row for each task', async(() => {
    fixture.detectChanges();
    let de: DebugElement = fixture.debugElement;
    expect(de.queryAll(By.css('.mat-row')).length).toEqual(testComponent.job.extensions.tasks.length);
  }));

  it('should display task data in each row', async(() => {
    fixture.detectChanges();
    let de: DebugElement = fixture.debugElement;
    expect(de.query(By.css('.title-link')).nativeElement.textContent)
      .toContain(task.name);
    expect(de.query(By.css('.title-link')).nativeElement.href)
      .toContain('/jobs/' + task.jobId);
    expect(de.query(By.css('.mat-column-status clr-icon')).attributes['shape'])
      .toContain('times');
    expect(de.queryAll(By.css('.mat-column-startTime'))[1].nativeElement.textContent)
      .toContain('1:00 PM');
    expect(de.queryAll(By.css('.mat-column-duration'))[1].nativeElement.textContent)
      .toEqual('0h 15m');
    expect(de.queryAll(By.css('.mat-column-attempts'))[1].nativeElement.textContent)
      .toEqual(task.attempts.toString());
    expect(de.queryAll(By.css('.mat-column-files a.log-item'))[0].properties['href'])
      .toContain('stdout.txt');
    expect(de.queryAll(By.css('.mat-column-files a.log-item'))[1].properties['href'])
      .toContain('stderr.txt');
  }));

  @Component({
    selector: 'jm-test-tasks-component',
    template: `<jm-tasks [tasks]="job.extensions.tasks" [job]="job"></jm-tasks>`
  })
  class TestTasksComponent {
    public job = job;
    @ViewChild(TaskDetailsComponent)
    public taskDetailsComponent: TaskDetailsComponent;
  }
});
