import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component} from "@angular/core";
import {By} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {MatCardModule, MatTableModule} from "@angular/material";

import {TotalSummaryComponent} from './total-summary.component';
import {JobStatus} from "../../shared/model/JobStatus";
import {StatusCounts} from "../../shared/model/StatusCounts";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

const testSummary: StatusCounts = {
  counts: [
    {
      count: 10,
      status: JobStatus.Succeeded
    },
    {
      count: 2,
      status: JobStatus.Failed
    }
  ]
};

describe('TotalSummaryComponent', () => {
  let hostComponent: TestHostComponent;
  let testComponent: TotalSummaryComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TotalSummaryComponent,
        TestHostComponent
      ],
      imports: [
        CommonModule,
        MatCardModule,
        MatTableModule,
        RouterTestingModule,
      ],
      providers: [{provide: ActivatedRoute, useValue: {
          snapshot: {
            queryParams: {projectId: 'bvdp-jmui-testing'}
          }
        }},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    hostComponent.componmentSummary = testSummary;
    testComponent = fixture.debugElement.query(By.css('jm-total-summary')).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(testComponent).toBeTruthy();
  });

  @Component({
    selector: `jm-test-host-component`,
    template: `<jm-total-summary [summary]="componmentSummary"></jm-total-summary>`
  })

  class TestHostComponent {
    public componmentSummary: StatusCounts;
  }
});
