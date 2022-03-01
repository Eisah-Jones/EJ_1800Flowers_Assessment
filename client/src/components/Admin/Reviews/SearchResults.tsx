import React, { Component } from "react";
import { connect } from "react-redux";
import ActionsAdminReviewsEditor from "../../../actions/Admin/Reviews/Editor";
import {AdminReviewsSearchResultsProps} from "../../../interfaces/components/Admin/SearchResults/Props";
import InterfaceAdminState from "../../../interfaces/states/Admin";
import "../../../stylesheets/components/Admin/Reviews/SearchResults.css";

class AdminReviewsSearchResults extends Component<AdminReviewsSearchResultsProps> {
  render() {
    return (
      <div
        className={"noselect"}
        id={"admin-reviews-search-results-container"}
      >
        <h1>{"Search Results"}</h1>
        <div id={"admin-reviews-search-results-option-container"}>
          {
            this.props.searchResults.map((result, idx) =>
              <div
                  className={"admin-reviews-search-results-option"}
                  key={idx}
                  onClick={() => this.props.selectOption(
                      result.userId,
                      result.id,
                      result.title,
                      result.body
                  )}
              >
                <div className={"admin-reviews-search-result-row-flex-container"}>
                  <div className={"admin-reviews-search-results-user-id-badge"}>{result.userId}</div>
                  <h2>{`Review ${result.id}:`}</h2>
                  <h3>{result.title}</h3>
                </div>
                <h3>{result.body}</h3>
              </div>
          )}
        </div>
      </div>
    );
  }
}

function mapState(state: InterfaceAdminState) {
  const { searchResults } = state.Admin.ReviewsSearch;
  return { searchResults };
}

const actionCreators = {
  selectOption: ActionsAdminReviewsEditor.SelectOption,
};

export default connect(mapState, actionCreators)(AdminReviewsSearchResults);