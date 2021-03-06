/**
 * Job Manager Service
 * Job Manager API for interacting with asynchronous batch jobs and workflows.
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

/**
 * Task level metadata
 */
export interface TaskMetadata {
    /**
     * Mapping of input fully qualified names to stringified values
     */
    inputs?: any;

    /**
     * Backend-specific task status.
     */
    executionStatus?: string;

    /**
     * Start datetime of the task execution in ISO8601 format with milliseconds
     */
    start?: Date;

    /**
     * End datetime of the task execution in ISO8601 format with milliseconds
     */
    end?: Date;

    /**
     * The name of the job
     */
    name?: string;

    /**
     * Backend-specific job ID
     */
    executionId?: string;

    failures?: Array<models.FailureMessage>;

    /**
     * Task execution return code
     */
    returnCode?: number;

    /**
     * Path to the standard output file for this task
     */
    stdout?: string;

    /**
     * Path to the standard error file for this task
     */
    stderr?: string;

    /**
     * Number of times the task was run
     */
    attempts?: number;

    /**
     * The root directory of the task execution
     */
    callRoot?: string;

    /**
     * Id of the job corresponding to this task, if this task is a nested child job. Expresses a child:parent relationship between this job and the job containing this task. 
     */
    jobId?: string;

}
