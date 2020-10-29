import React from 'react'

export default function Comments(props) {
  const { comments } = props;
  return (
    <div className="comments">
      <h3>Comments</h3>
      {
        comments.map(comment => (
            <p key={comment.id}>
              {comment.user} commented:<br />
              {comment.content}
            </p>
        ))
      }
    </div>
  )
}