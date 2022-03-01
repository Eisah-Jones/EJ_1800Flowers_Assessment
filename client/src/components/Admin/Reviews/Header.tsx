import React, {Component} from "react";
import {connect} from "react-redux";
import ActionsAdminReviewsSearch from "../../../actions/Admin/Reviews/Search";
import {AdminReviewsHeaderProps} from "../../../interfaces/components/Admin/Header/Props";
import InterfaceAdminState from "../../../interfaces/states/Admin";
import {FilterReviewDataContains} from "../../../utils/Input/FilterReviewData";
import "../../../stylesheets/components/Admin/Reviews/Header.css";
import {Autocomplete, TextField} from "@mui/material";

class AdminUserReviewsHeader extends Component<AdminReviewsHeaderProps> {
  constructor(props: AdminReviewsHeaderProps) {
    super(props);
    this.detectEnterKey = this.detectEnterKey.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  componentDidMount() {
    this.props.getReviews();
  }

  detectEnterKey(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      this.handleSearchButton();
    }
  }

  handleSearchButton() {
    this.props.queryReviewsByTitle(this.props.queryInput)
  }

  handleSearchInput(inputValue: string) {
    this.props.setInput(inputValue);
    let autocompleteSuggestions = FilterReviewDataContains(
      inputValue,
      this.props.allReviews
    );
    this.props.setAutocompleteSuggestions(autocompleteSuggestions)
  }

  render() {
    return (
      <div className={"noselect"} id={"admin-user-reviews-header-container"}>
        <h1 id={"admin-user-reviews-header-label"}>{"User Reviews"}</h1>
        <div id={"admin-user-reviews-header-input-container"}>
          <Autocomplete
            freeSolo={true}
            onChange={(
              event,
              newValue) =>
              this.handleSearchInput((newValue as string))}
            onInputChange={(event, newValue) => this.handleSearchInput(newValue)}
            onKeyPress={this.detectEnterKey}
            options={this.props.filteredSuggestions}
            renderInput={(params) => (
              <TextField
                {...params}
                id={"admin-user-reviews-input"}
                label={"Title"}
                name={"title-search"}
              />
            )}
            style={{width: "100%"}}
          />
          <button
            id={"admin-user-reviews-search-button"}
            onClick={this.handleSearchButton}
          >
            {"Search"}
          </button>
        </div>
      </div>
    );
  }
}

function mapState(state: InterfaceAdminState) {
  const { allReviews, filteredSuggestions, queryInput } = state.Admin.ReviewsSearch;
  return { allReviews, filteredSuggestions, queryInput };
}

const actionCreators = {
  getReviews: ActionsAdminReviewsSearch.GetAllReviews,
  setAutocompleteSuggestions: ActionsAdminReviewsSearch.SetAutocompleteSuggestions,
  setInput: ActionsAdminReviewsSearch.SetInput,
  queryReviewsByTitle: ActionsAdminReviewsSearch.QueryReviewsByTitle,
};

export default connect(mapState, actionCreators)(AdminUserReviewsHeader);