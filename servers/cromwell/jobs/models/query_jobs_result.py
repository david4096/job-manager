# coding: utf-8

from __future__ import absolute_import
from jobs.models.extended_fields import ExtendedFields
from jobs.models.job_status import JobStatus
from .base_model_ import Model
from datetime import date, datetime
from typing import List, Dict
from ..util import deserialize_model


class QueryJobsResult(Model):
    """
    NOTE: This class is auto generated by the swagger code generator program.
    Do not edit the class manually.
    """
    def __init__(self, id=None, name=None, status=None, submission=None, start=None, end=None, labels=None, extensions=None):
        """
        QueryJobsResult - a model defined in Swagger

        :param id: The id of this QueryJobsResult.
        :type id: str
        :param name: The name of this QueryJobsResult.
        :type name: str
        :param status: The status of this QueryJobsResult.
        :type status: JobStatus
        :param submission: The submission of this QueryJobsResult.
        :type submission: datetime
        :param start: The start of this QueryJobsResult.
        :type start: datetime
        :param end: The end of this QueryJobsResult.
        :type end: datetime
        :param labels: The labels of this QueryJobsResult.
        :type labels: object
        :param extensions: The extensions of this QueryJobsResult.
        :type extensions: ExtendedFields
        """
        self.swagger_types = {
            'id': str,
            'name': str,
            'status': JobStatus,
            'submission': datetime,
            'start': datetime,
            'end': datetime,
            'labels': object,
            'extensions': ExtendedFields
        }

        self.attribute_map = {
            'id': 'id',
            'name': 'name',
            'status': 'status',
            'submission': 'submission',
            'start': 'start',
            'end': 'end',
            'labels': 'labels',
            'extensions': 'extensions'
        }

        self._id = id
        self._name = name
        self._status = status
        self._submission = submission
        self._start = start
        self._end = end
        self._labels = labels
        self._extensions = extensions

    @classmethod
    def from_dict(cls, dikt):
        """
        Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The QueryJobsResult of this QueryJobsResult.
        :rtype: QueryJobsResult
        """
        return deserialize_model(dikt, cls)

    @property
    def id(self):
        """
        Gets the id of this QueryJobsResult.
        Job ID

        :return: The id of this QueryJobsResult.
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """
        Sets the id of this QueryJobsResult.
        Job ID

        :param id: The id of this QueryJobsResult.
        :type id: str
        """
        if id is None:
            raise ValueError("Invalid value for `id`, must not be `None`")

        self._id = id

    @property
    def name(self):
        """
        Gets the name of this QueryJobsResult.
        Job name

        :return: The name of this QueryJobsResult.
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """
        Sets the name of this QueryJobsResult.
        Job name

        :param name: The name of this QueryJobsResult.
        :type name: str
        """

        self._name = name

    @property
    def status(self):
        """
        Gets the status of this QueryJobsResult.

        :return: The status of this QueryJobsResult.
        :rtype: JobStatus
        """
        return self._status

    @status.setter
    def status(self, status):
        """
        Sets the status of this QueryJobsResult.

        :param status: The status of this QueryJobsResult.
        :type status: JobStatus
        """
        if status is None:
            raise ValueError("Invalid value for `status`, must not be `None`")

        self._status = status

    @property
    def submission(self):
        """
        Gets the submission of this QueryJobsResult.
        Submission datetime in ISO8601 format

        :return: The submission of this QueryJobsResult.
        :rtype: datetime
        """
        return self._submission

    @submission.setter
    def submission(self, submission):
        """
        Sets the submission of this QueryJobsResult.
        Submission datetime in ISO8601 format

        :param submission: The submission of this QueryJobsResult.
        :type submission: datetime
        """
        if submission is None:
            raise ValueError("Invalid value for `submission`, must not be `None`")

        self._submission = submission

    @property
    def start(self):
        """
        Gets the start of this QueryJobsResult.
        Job start datetime in ISO8601 format

        :return: The start of this QueryJobsResult.
        :rtype: datetime
        """
        return self._start

    @start.setter
    def start(self, start):
        """
        Sets the start of this QueryJobsResult.
        Job start datetime in ISO8601 format

        :param start: The start of this QueryJobsResult.
        :type start: datetime
        """

        self._start = start

    @property
    def end(self):
        """
        Gets the end of this QueryJobsResult.
        Job end datetime in ISO8601 format

        :return: The end of this QueryJobsResult.
        :rtype: datetime
        """
        return self._end

    @end.setter
    def end(self, end):
        """
        Sets the end of this QueryJobsResult.
        Job end datetime in ISO8601 format

        :param end: The end of this QueryJobsResult.
        :type end: datetime
        """

        self._end = end

    @property
    def labels(self):
        """
        Gets the labels of this QueryJobsResult.
        Custom job labels with string values

        :return: The labels of this QueryJobsResult.
        :rtype: object
        """
        return self._labels

    @labels.setter
    def labels(self, labels):
        """
        Sets the labels of this QueryJobsResult.
        Custom job labels with string values

        :param labels: The labels of this QueryJobsResult.
        :type labels: object
        """

        self._labels = labels

    @property
    def extensions(self):
        """
        Gets the extensions of this QueryJobsResult.

        :return: The extensions of this QueryJobsResult.
        :rtype: ExtendedFields
        """
        return self._extensions

    @extensions.setter
    def extensions(self, extensions):
        """
        Sets the extensions of this QueryJobsResult.

        :param extensions: The extensions of this QueryJobsResult.
        :type extensions: ExtendedFields
        """

        self._extensions = extensions

