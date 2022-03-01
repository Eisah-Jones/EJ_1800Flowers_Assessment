import {InterfaceAPIReviewData} from "../../interfaces/services/api";

export function FilterReviewDataContains(
  filter: string,
  options: InterfaceAPIReviewData[],
):string[]{
  let filteredSuggestions:string[] = [];
  options.forEach((option) => {
    const title = option.title;
    if (filter === null || title.indexOf(filter) > -1)
      filteredSuggestions.push(title);
  })
  return filteredSuggestions;
}

export function FilterReviewDataExact(
  filter: string,
  options: InterfaceAPIReviewData[],
):string[]{
  let filteredSuggestions:string[] = [];
  options.forEach((option) => {
    const title = option.title;
    if (title === filter)
      filteredSuggestions.push(title);
  })
  return filteredSuggestions;
}