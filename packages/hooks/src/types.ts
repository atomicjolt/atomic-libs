import { Dispatch, SetStateAction } from 'react';

export type InitialState<S> = S | (() => S);
export type UpdateStateAction<S> = SetStateAction<S>;
export type StateDispatch<S> = Dispatch<UpdateStateAction<S>>;
