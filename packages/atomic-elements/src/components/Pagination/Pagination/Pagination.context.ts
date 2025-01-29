import React from "react";
import { PageState } from "../Pagination.types";
import { PaginationProps } from "./Pagination.component";
import { createComponentContext } from "@utils/index";

export const PaginationContext = createComponentContext<PaginationProps>();

export const PaginationStateContext = React.createContext<PageState>({} as any);
