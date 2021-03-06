# coding: utf-8

from __future__ import absolute_import
from jobs.models.job_status import JobStatus
from .base_model_ import Model
from datetime import date, datetime
from typing import List, Dict
from ..util import deserialize_model


class StatusCount(Model):
    """
    NOTE: This class is auto generated by the swagger code generator program.
    Do not edit the class manually.
    """
    def __init__(self, status=None, count=None):
        """
        StatusCount - a model defined in Swagger

        :param status: The status of this StatusCount.
        :type status: JobStatus
        :param count: The count of this StatusCount.
        :type count: int
        """
        self.swagger_types = {
            'status': JobStatus,
            'count': int
        }

        self.attribute_map = {
            'status': 'status',
            'count': 'count'
        }

        self._status = status
        self._count = count

    @classmethod
    def from_dict(cls, dikt):
        """
        Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The StatusCount of this StatusCount.
        :rtype: StatusCount
        """
        return deserialize_model(dikt, cls)

    @property
    def status(self):
        """
        Gets the status of this StatusCount.

        :return: The status of this StatusCount.
        :rtype: JobStatus
        """
        return self._status

    @status.setter
    def status(self, status):
        """
        Sets the status of this StatusCount.

        :param status: The status of this StatusCount.
        :type status: JobStatus
        """

        self._status = status

    @property
    def count(self):
        """
        Gets the count of this StatusCount.

        :return: The count of this StatusCount.
        :rtype: int
        """
        return self._count

    @count.setter
    def count(self, count):
        """
        Sets the count of this StatusCount.

        :param count: The count of this StatusCount.
        :type count: int
        """

        self._count = count

