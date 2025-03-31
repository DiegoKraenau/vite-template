import { apiUrl } from '@/app-globals';
import { CustomError } from '@/domain/custom-error';
import { RequestMethod } from '@/domain/http';
import { User } from '@/domain/user';
import { getBaseRequestOptions } from '@/utils/http/request-options';

const getUserInfo = async (): Promise<User> => {
  const response = await fetch(`${apiUrl}/user`, {
    ...getBaseRequestOptions(),
    method: RequestMethod.Get,
  });

  const result = await response.json();

  if (response.ok) {
    return result.features;
  }

  throw new CustomError({ status: response.status, ...result });
};

export const UserProxy = {
  getUserInfo,
};
