import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const initialComments = [
  { id: 1, author: 'Sara', text: 'Great explanation of components!', likes: 5 },
  { id: 2, author: 'Omar', text: 'Props finally make sense to me.', likes: 2 },
  { id: 3, author: 'Ali', text: 'Can we do a lab on useState next week?', likes: 7 },
  { id: 4, author: 'You', text: 'Thanks for the lab, this was fun!', likes: 0 },
];

function CommentForm({ onPost }) {
  const [text, setText] = useState('');
  function submit(event) {
    event.preventDefault();
    if (!text.trim()) return;
    onPost(text.trim());
    setText('');
  }
  return <form onSubmit={submit}>
    <input aria-label="Write a comment" placeholder="Write a comment..." value={text} onChange={event => setText(event.target.value)} maxLength={1000}/>
    <button className="post" type="submit" disabled={!text.trim()}>Post</button>
  </form>;
}

function Comment({ comment, onLike }) {
  return <li className="comment">
    <span className="avatar" aria-hidden="true">{comment.author[0]}</span>
    <article className="bubble">
      <strong>{comment.author}</strong><p>{comment.text}</p>
      <button className="like" aria-label={`Like comment by ${comment.author}: ${comment.likes} likes`} onClick={() => onLike(comment.id)}><span aria-hidden="true">♥</span> {comment.likes}</button>
    </article>
  </li>;
}

function App() {
  const [comments, setComments] = useState(initialComments);
  function addComment(text) {
    setComments(current => [...current, { id: crypto.randomUUID(), author: 'You', text, likes: 0 }]);
  }
  function likeComment(id) {
    setComments(current => current.map(comment => comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment));
  }
  return <main>
    <h1>Comments ({comments.length})</h1>
    <CommentForm onPost={addComment}/>
    <ul aria-label="Comments">{comments.map(comment => <Comment key={comment.id} comment={comment} onLike={likeComment}/>)}</ul>
  </main>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
