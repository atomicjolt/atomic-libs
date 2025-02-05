import { expect, it, describe } from 'vitest';
import { parseLinkHeader } from './link_header';

describe('parseLinkHeader', () => {
  it('should parse a single link header correctly', () => {
    const header = '<https://api.example.com/data?page=2>; rel="next"';
    const result = parseLinkHeader(header);
    expect(result).to.have.property('next', 'https://api.example.com/data?page=2');
  });

  it('should parse multiple link headers correctly', () => {
    const header = '<https://api.example.com/data?page=2>; rel="next", <https://api.example.com/data?page=1>; rel="prev"';
    const result = parseLinkHeader(header);
    expect(result).to.have.property('next', 'https://api.example.com/data?page=2');
    expect(result).to.have.property('prev', 'https://api.example.com/data?page=1');
  });

  it('should return an empty object for an empty header', () => {
    const header = '';
    const result = parseLinkHeader(header);
    expect(result).to.be.empty;
  });

  it('should throw an error for malformed header', () => {
    const header = '<https://api.example.com/data?page=2>';
    expect(() => parseLinkHeader(header)).to.throw('section could not be split on ";"');
  });
});
