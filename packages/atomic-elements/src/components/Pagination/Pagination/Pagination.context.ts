import React from "react";
import { PageState } from "../Pagination.types";

export const PaginationContext = React.createContext<PageState>({} as any);
