# coding: utf-8

from __future__ import absolute_import
from .base_model_ import Model
from datetime import date, datetime
from typing import List, Dict
from ..util import deserialize_model


class FailureMessage(Model):
    """
    NOTE: This class is auto generated by the swagger code generator program.
    Do not edit the class manually.
    """
    def __init__(self, failure=None, timestamp=None):
        """
        FailureMessage - a model defined in Swagger

        :param failure: The failure of this FailureMessage.
        :type failure: str
        :param timestamp: The timestamp of this FailureMessage.
        :type timestamp: datetime
        """
        self.swagger_types = {
            'failure': str,
            'timestamp': datetime
        }

        self.attribute_map = {
            'failure': 'failure',
            'timestamp': 'timestamp'
        }

        self._failure = failure
        self._timestamp = timestamp

    @classmethod
    def from_dict(cls, dikt):
        """
        Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The FailureMessage of this FailureMessage.
        :rtype: FailureMessage
        """
        return deserialize_model(dikt, cls)

    @property
    def failure(self):
        """
        Gets the failure of this FailureMessage.
        The failure message

        :return: The failure of this FailureMessage.
        :rtype: str
        """
        return self._failure

    @failure.setter
    def failure(self, failure):
        """
        Sets the failure of this FailureMessage.
        The failure message

        :param failure: The failure of this FailureMessage.
        :type failure: str
        """
        if failure is None:
            raise ValueError("Invalid value for `failure`, must not be `None`")

        self._failure = failure

    @property
    def timestamp(self):
        """
        Gets the timestamp of this FailureMessage.
        The time at which this failure occurred

        :return: The timestamp of this FailureMessage.
        :rtype: datetime
        """
        return self._timestamp

    @timestamp.setter
    def timestamp(self, timestamp):
        """
        Sets the timestamp of this FailureMessage.
        The time at which this failure occurred

        :param timestamp: The timestamp of this FailureMessage.
        :type timestamp: datetime
        """

        self._timestamp = timestamp
