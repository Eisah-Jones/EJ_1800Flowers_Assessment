import React from "react";
import AdminUserReviewEditor from "../../../components/Admin/Reviews/Editor";
import AdminUserReviewsHeader from "../../../components/Admin/Reviews/Header";
import AdminUserReviewSearchResults from "../../../components/Admin/Reviews/SearchResults";
import SharedHeader from "../../../components/Shared/Header";
import "../../../App.css";

const ScreensAdminReviews = () => (
  <div className={"screen"}>
    <SharedHeader/>
    <AdminUserReviewsHeader/>
    <div className={"row-flex"}>
      <AdminUserReviewSearchResults/>
      <AdminUserReviewEditor/>
    </div>
  </div>
);

export default ScreensAdminReviews;