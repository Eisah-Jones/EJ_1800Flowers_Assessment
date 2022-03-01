import { InterfaceAPIReviewData } from "../interfaces/services/api";
import axios, {AxiosResponse} from "axios";

export function APIGetReviews():Promise<AxiosResponse> {
  return axios.get<InterfaceAPIReviewData[]>(
      "http://localhost:8080/api/admin/reviews"
  );
}

export function APIQueryReviewsByTitle(titleQuery: string):Promise<AxiosResponse> {
  return axios.get<InterfaceAPIReviewData[]>(
      `http://localhost:8080/api/admin/reviews/byTitle/${titleQuery}`,
  )
}