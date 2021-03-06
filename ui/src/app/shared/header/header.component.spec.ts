import {async, ComponentFixture, fakeAsync, TestBed, tick} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {Component, DebugElement, Input, ViewChild} from "@angular/core";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {CapabilitiesService} from "../../core/capabilities.service"
import {FakeCapabilitiesService} from "../../testing/fake-capabilities.service"
import {JobListView} from "../job-stream";
import {HeaderComponent} from "./header.component";
import {CapabilitiesResponse} from '../model/CapabilitiesResponse';
import {QueryJobsResult} from '../model/QueryJobsResult';
import {JobStatus} from "../model/JobStatus";


describe('HeaderComponent', () => {
  const baseJob = {
    status: JobStatus.Running,
    submission: new Date('2015-04-20T20:00:00'),
  };
  const testJob1: QueryJobsResult = { ...baseJob, id: 'JOB1' };
  const testJob2: QueryJobsResult = { ...baseJob, id: 'JOB2' };
  const testJob3: QueryJobsResult = { ...baseJob, id: 'JOB3' };

  const initJobs: JobListView = {
    results: [testJob1, testJob2, testJob3],
    exhaustive: false,
    stale: false
  };

  let testComponent: HeaderComponent;
  let fixture: ComponentFixture<TestHeaderComponent>;
  let capabilities: CapabilitiesResponse = {
    displayFields: [
      {field: 'status', display: 'Status'},
      {field: 'submission', display: 'Submitted'},
      {field: 'extensions.userId', display: 'User ID'},
      {field: 'labels.job-id', display: 'Job ID'}
    ],
    queryExtensions: ['projectId']
  };

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [HeaderComponent, TestHeaderComponent, MockFilterChipComponent],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          {path: '', component: TestHeaderComponent},
          {path: 'jobs', component: TestHeaderComponent}
        ]),
      ],
      providers: [
        {provide: CapabilitiesService, useValue: new FakeCapabilitiesService(capabilities)}
      ]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TestHeaderComponent);
    testComponent = fixture.componentInstance.headerComponent;
    testComponent.chips = new Map()
      .set('projectId', 'Project ID')
      .set('name', 'Job Name')
      .set('statuses', 'Running');
    fixture.detectChanges();
  }));

  it('should display a chip for each query filter', async(() => {
    let de: DebugElement = fixture.debugElement;
    expect(de.queryAll(By.css('.chipShell')).length).toEqual(3);
  }));

  it('should stage a chip', async ( () => {
    testComponent.addChip('key');
    fixture.detectChanges();
    expect(testComponent.chips.get('key')).toEqual('');
    expect(fixture.debugElement.queryAll(By.css('.chipShell')).length).toEqual(4);
  }));

  it('should stage and complete a chip', async (() => {
    testComponent.addChip('key: value');
    fixture.detectChanges();
    expect(testComponent.chips.get('key')).toEqual('value');
    expect(fixture.debugElement.queryAll(By.css('.chipShell')).length).toEqual(4);
  }));

  it('should not show status buttons', async(() => {
    testComponent.chips.set('statuses', 'list,of,statuses');
    testComponent.search();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(fixture.debugElement.queryAll(By.css('.status-button')).length).toEqual(0);
    });
  }));

  it('should show status buttons', async(() => {
    testComponent.chips.delete('statuses');
    testComponent.search();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(fixture.debugElement.queryAll(By.css('.status-button')).length).toEqual(3);
    });
  }));

  it('should show status counts', async(() => {
    testComponent.chips.delete('statuses');
    testComponent.jobs.next({
      results: [testJob1, testJob2],
      exhaustive: true,
      stale: false
    });
    testComponent.search();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(fixture.debugElement.query(
        By.css('.active-button')).nativeElement.textContent).toContain('(2)');
    });
  }));

  it('should show hide status counts on non-exhaustive', async(() => {
    testComponent.chips.delete('statuses');
    testComponent.jobs.next({
      results: [testJob1, testJob2],
      exhaustive: false,
      stale: false
    });
    testComponent.search();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(fixture.debugElement.query(
        By.css('.active-button')).nativeElement.textContent).not.toContain('(2)');
    });
  }));

  it('should only show length for exhaustive job streams', async(() => {
    testComponent.jobs.next({
      results: [testJob1],
      exhaustive: false,
      stale: false
    });
    fixture.detectChanges();
    let de: DebugElement = fixture.debugElement;
    expect(de.query(By.css('.mat-paginator-range-label')).nativeElement.textContent)
      .toContain('of many');

    // Transition to exhaustive, "of X" should now display length.
    testComponent.jobs.next({
      results: [testJob1, testJob2],
      exhaustive: true,
      stale: false
    });
    fixture.detectChanges();
    expect(de.query(By.css('.mat-paginator-range-label')).nativeElement.textContent)
      .toContain('of 2');
  }));

  it('should maintain chip ordering', fakeAsync(() => {
    testComponent.chips.delete('statuses');
    testComponent.search();
    fixture.detectChanges();
    tick();
    const de: DebugElement = fixture.debugElement;
    expect(de.queryAll(By.css('jm-filter-chip')).length).toEqual(2);
    de.query(By.css('.completed-button')).nativeElement.click();
    tick();
    fixture.detectChanges();
    const lastFilter = de.queryAll(By.css('jm-filter-chip'))[2].componentInstance;
    expect(lastFilter.chipKey).toEqual('statuses');
  }));

  @Component({
    selector: 'jm-test-table-component',
    template:
      `<jm-header [jobs]="jobs" [pageSize]="25"></jm-header>`
  })
  class TestHeaderComponent {
    public jobs = new BehaviorSubject<JobListView>(initJobs);
    @ViewChild(HeaderComponent)
    public headerComponent: HeaderComponent;
  }

  @Component({
    selector: 'jm-filter-chip',
    template: ''
  })
  class MockFilterChipComponent {
    @Input() chipKey: string;
    @Input() initialChipValue: string;
  }
});
