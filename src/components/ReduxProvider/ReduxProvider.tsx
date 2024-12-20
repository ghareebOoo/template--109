"use client";
import { Provider } from "react-redux";
import {mystore} from "@/store/store"
import { ReactNode } from "react";
export default function ReduxProvider({children}: {children: ReactNode}) {
  return <Provider store={mystore}>
    {children}
  </Provider>
}
