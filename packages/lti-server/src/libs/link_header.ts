// Function to parse Link headers
export function parseLinkHeader(header: string | null): { [key: string]: string } {
  const links: { [key: string]: string } = {};

  if (!header || header.length === 0) {
    return links;
  }

  return header.split(',').reduce((acc, part) => {
    const section = part.split(';');
    if (section.length !== 2) {
      throw new Error('section could not be split on ";"');
    }
    const url = section[0]?.replace(/<(.*)>/, '$1')?.trim();
    const name = section[1]?.replace(/rel="(.*)"/, '$1')?.trim();
    if (name && url) {
      acc[name] = url;
    }
    return acc;
  }, {} as { [key: string]: string });
}