import { describe, it, expect, beforeEach } from 'vitest';
import { getData } from '../src/services/redux';
import fetchMock from 'fetch-mock';

describe('Get de series y peliculas', () => {
  beforeEach(() => {
    fetchMock.restore();
  });

  it('Debe retornar las series y peliculas', async () => {
    const mockData = {
      entries: [
        {
          title: 'Rake',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          programType: 'series',
          images: {
            'Poster Art': {
              url: 'https://streamcoimg-a.akamaihd.net/000/165/9/1659-PosterArt-b326059d852397768897083483b44324.jpeg',
              width: 1000,
              height: 1500,
            },
          },
          releaseYear: 2010,
        },
      ],
    };

    fetchMock.mock(
      'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
      {
        status: 200,
        body: mockData,
      }
    );

    const result = await getData();

    expect(result).toEqual(mockData.entries);
  });

  it('Errores del fetch', async () => {
    fetchMock.mock(
      'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
      {
        throws: new Error('Error de la api'),
      }
    );

    try {
      await getData();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
