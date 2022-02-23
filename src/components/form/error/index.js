import React from 'react';

import { STATUS } from './status';

export const Error = ({ status }) => {
  const ERROR = {};

  ERROR[STATUS.TOO_SHORT_PASSWORD] = 'too short password';
  ERROR[STATUS.INVALID_REQUEST] = 'invalid request';
  ERROR[STATUS.USER_ALREADY_EXIST] = 'user already exist';
  ERROR[STATUS.USER_DOES_NOT_EXIST] = 'user does not exist';
  ERROR[STATUS.ACCESS_DENIED] = 'access denied';
  ERROR[STATUS.INVALID_TOKEN] = 'invalid token';
  ERROR[STATUS.INVALID_ID] = 'invalid id';
  ERROR[STATUS.NO_TASKS] = 'no tasks';
  ERROR[STATUS.TASK_DOES_NOT_EXIST] = 'task does not exist';
  ERROR[STATUS.NO_SOLUTION] = 'no solutions';
  ERROR[STATUS.EMPTY_DATA] = 'empty data';
  ERROR[STATUS.PERMISSIONS_DENIED] = 'permissions denied';
  ERROR[STATUS.NICKNAME_ALREADY_IN_USE] = 'nickname already in use';
  ERROR[STATUS.INVALID_DATA] = 'invalid data';

  if (status !== STATUS.OK) {
    return <div className="form__error">{ERROR[status]}</div>;
  }
};
