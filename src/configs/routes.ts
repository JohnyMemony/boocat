import {constants} from '../constants';

const {URLS} = constants;

export function buildRoute(...args: any[]) {
  const url = args.join('/');

  return `/${url}`;
}

export const ROUTES = {
  ROOT: URLS.ROOT,
  POST: buildRoute(URLS.POST, URLS.PARAMS.ID),
};
