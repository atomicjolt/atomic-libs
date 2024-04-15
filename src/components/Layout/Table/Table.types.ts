export interface SearchDescriptor {
  /** Column that is currently being searched on */
  column: React.Key | null;
  /** Search string */
  search: string;
}

export interface Searchable {
  /** Object representing the current search state of the table */
  searchDescriptor?: SearchDescriptor;
  /** Handler called whenever a change is made to the searchDescriptor */
  onSearchChange?: (descriptor: SearchDescriptor) => void;
}
