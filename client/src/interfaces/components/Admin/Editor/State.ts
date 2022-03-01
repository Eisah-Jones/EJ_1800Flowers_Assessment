export interface InterfaceComponentsAdminReviewEditorState {
  body: string,
  id: number,
  reviewQuery: string,
  title: string,
  userId: number,
}

export type AdminReviewsEditorState =
  | InterfaceComponentsAdminReviewEditorState;