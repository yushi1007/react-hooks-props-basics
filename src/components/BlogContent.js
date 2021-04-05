import React from "react";

function BlogContent(props) {
  console.log(props);

  // hide unpublished content
  if (!props.isPublished) return null;

  // show published content
  return (
    <div>
      <h1>{props.articleText}</h1>
      <p>{props.minutesToRead} minutes to read</p>
    </div>
  );
}

export default BlogContent;
