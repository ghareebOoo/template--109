import { AppDispatch, rootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export const useAppSelector = useSelector.withTypes<rootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()