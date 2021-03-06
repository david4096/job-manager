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
 * Response to a job query
 */
export interface QueryJobsResponse {
    results: Array<models.QueryJobsResult>;

    /**
     * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. This field will be empty if there aren't any additional results. 
     */
    nextPageToken?: string;

}
