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
 * Update labels on a job
 */
export interface UpdateJobLabelsRequest {
    /**
     * Labels to be merged into the existing job labels. Overwrites the label values for all given keys. Existing labels on the job which are not referenced in this request are left unmodified. 
     */
    labels?: any;

}
