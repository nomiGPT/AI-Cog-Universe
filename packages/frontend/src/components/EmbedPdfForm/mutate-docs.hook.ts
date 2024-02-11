import {useMutation, useQueryClient} from "react-query";
import apiInstance from "@/helpers/api";

export function useMutateDocs(onUploadProgress: (progress: string) => void, onSuccess: () => void, onComplete: () => void) {
  const queryClient = useQueryClient()
  return useMutation((embedDocument: FormData) => apiInstance.post("/pdf-embedding/embed"