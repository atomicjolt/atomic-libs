export interface SearchDescriptor {
  column: React.Key | null;
  search: string;
}

export interface Searchable {
  searchDescriptor?: SearchDescriptor;
  onSearchChange?: (descriptor: SearchDescriptor) => void;
}
