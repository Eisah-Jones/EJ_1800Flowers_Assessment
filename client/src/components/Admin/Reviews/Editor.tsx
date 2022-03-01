import React, { Component } from "react";
import { connect } from "react-redux";
import {Autocomplete, TextField} from "@mui/material";
import ActionsAdminReviewsEditor from "../../../actions/Admin/Reviews/Editor";
import { AdminReviewsEditorProps } from "../../../interfaces/components/Admin/Editor/Props";
import { AdminReviewsEditorState } from "../../../interfaces/components/Admin/Editor/State";
import InterfaceAdminState from "../../../interfaces/states/Admin";
import {FilterReviewDataContains} from "../../../utils/Input/FilterReviewData";
import "../../../stylesheets/components/Admin/Reviews/Editor.css";


class AdminReviewEditor extends Component<AdminReviewsEditorProps, AdminReviewsEditorState> {
  constructor(props: AdminReviewsEditorProps) {
    super(props);
    this.state = {
      body: this.props.body,
      id: this.props.id,
      reviewQuery: "",
      title: this.props.title,
      userId: this.props.userId,
    };
    this.detectEnterKey = this.detectEnterKey.bind(this);
    this.handleTitleSearch = this.handleTitleSearch.bind(this);
    this.handleDataInput = this.handleDataInput.bind(this);
  }

  componentDidUpdate(prevProps: Readonly<AdminReviewsEditorProps>) {
    if(this.props.id !== prevProps.id)
      this.setState({
        userId: this.props.userId,
        id: this.props.id,
        title: this.props.title,
        body: this.props.body,
      });
  }

  detectEnterKey(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      this.handleTitleSearch();
    }
  }

  handleAutocompleteOptions(inputValue: string) {
    this.setState({reviewQuery: inputValue})
    let autocompleteSuggestions = FilterReviewDataContains(
      inputValue,
      this.props.allReviews
    );
    this.props.setAutocompleteSuggestions(autocompleteSuggestions);
  }

  handleTitleSearch() {
    this.props.querySearchResultsByTitle(
      this.state.reviewQuery,
      this.props.allReviews
    )
  }

  handleDataInput(field: string, value: string) {
    switch(field) {
      case "title":
        return this.setState({"title": value});
      case "body":
        return this.setState({"body": value});
      default:
        return;
    }
  }

  render() {
    let editorView;
    if (this.props.userId === -1 || this.props.id === -1)
      editorView = (
        <div id={"admin-reviews-editor-form-container"}>
          <h1>{"Looks like you haven't selected a review to edit."}</h1>
          <h2>{"Select an option from the search results or enter the review title below."}</h2>
          <div id={"admin-reviews-editor-title-search-container"}>
            <Autocomplete
              onChange={(
                event,
                newValue) =>
                this.handleAutocompleteOptions((newValue as string))}
              onInputChange={(event, newValue) => this.handleAutocompleteOptions(newValue)}
              onKeyPress={this.detectEnterKey}
              options={this.props.filteredSuggestions}
              renderInput={(params) => (
                <TextField
                  {...params}
                  value={this.state.reviewQuery}
                  label={"Title"}
                  style={{color: "black"}}
                />
              )}
            />
            <div id={"admin-reviews-editor-title-search-button-container"}>
              <button
                id={"admin-reviews-editor-title-search-button"}
                onClick={() => {
                  this.props.querySearchResultsByTitle(
                    this.state.reviewQuery,
                    this.props.allReviews
                  );
                }}
              >
                {"Search"}
              </button>
            </div>
          </div>
        </div>
      );
    else
      editorView = (
          <div id={"admin-reviews-editor-form-container"}>
            <div className={"admin-reviews-editor-row-flex"}>
              <h1>{`userId: ${this.state.userId}`}</h1>
              <h1>{`reviewId: ${this.state.id}`}</h1>
            </div>
            <TextField
              value={this.state.title}
              label={"Title"}
              onChange={(event) => this.handleDataInput(
                "title",
                event.target.value
              )}
              sx={{width: "90%", margin: "2%"}}
            />
            <TextField
              multiline
              spellCheck={false}
              value={this.state.body}
              label={"Body"}
              onChange={(event) => this.handleDataInput(
                "body",
                event.target.value
              )}
              maxRows={15}
              sx={{width: "90%", margin: "2%"}}
            />
            <div className={"admin-reviews-editor-row-flex"}>
              <button
                className={"admin-reviews-editor-button"}
                onClick={() => {
                  this.props.selectOption(-1, -1, '', '');
                  this.handleAutocompleteOptions('');
                }}
              >
                {"Cancel"}
              </button>
              <button
                className={"admin-reviews-editor-button"}
                onClick={() => {
                  this.props.updateReview(
                    this.state.id,
                    this.state.title,
                    this.state.body
                  );
                  this.props.selectOption(-1, -1, "", "");
                  this.handleAutocompleteOptions('');
                }}
              >
                {"Submit"}
              </button>
            </div>
          </div>
      );

    return (
        <div
          className={"noselect"}
          id={"admin-reviews-editor-container"}
        >
          <h1>{"Review Editor"}</h1>
          {editorView}
        </div>
    );
  }
}

function mapState(state: InterfaceAdminState) {
  const {allReviews} = state.Admin.ReviewsSearch;
  const {body, filteredSuggestions, id, title, userId} = state.Admin.ReviewsEditor;
  return {allReviews, body, filteredSuggestions, id, title, userId}
}

const actionCreators = {
  selectOption: ActionsAdminReviewsEditor.SelectOption,
  querySearchResultsByTitle: ActionsAdminReviewsEditor.QuerySearchResultsByTitle,
  setAutocompleteSuggestions: ActionsAdminReviewsEditor.SetAutocompleteSuggestions,
  updateReview: ActionsAdminReviewsEditor.UpdateReview,
}

export default connect(mapState, actionCreators)(AdminReviewEditor);