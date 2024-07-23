import { beforeEach } from 'vitest';
import fetchMock from 'fetch-mock';

beforeEach(() => {
  fetchMock.restore();
});
