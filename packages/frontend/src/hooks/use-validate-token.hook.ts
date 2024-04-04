import {useEffect} from "react";
import {LOCAL_STORAGE} from "@/constants";
import {useRouter} from "next/router";
import apiInstance from "@/helpers/api";
import {useSearchParams} from "next/navigation";

export function useValidateToken() {
  const { push, pathname } = useRouter();
  const params = useSearchParams();
  useEffect( () => {
    const code = params.get('code');
    apiInsta