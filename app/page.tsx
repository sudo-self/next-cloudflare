import React, { useState, useEffect } from 'react';

export default function Home() {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await fetch('https://list.jessejesse.workers.dev');
      if (response.ok) {
        const data = await response.json();
        setComments(data.comments);
      } else {
        console.error('Failed to fetch comments:', response.status);
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://list.jessejesse.workers.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment: commentInput }),
      });
      if (response.ok) {
        // After successfully posting the comment, refetch comments to update the UI
        fetchComments();
        setCommentInput('');
      } else {
        console.error('Failed to post comment:', response.status);
      }
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Existing content */}
      <div>
        <h1>Comments:</h1>
        <div>
          {comments.map((comment, index) => (
            <div key={index}>{comment}</div>
          ))}
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            placeholder="Enter your comment"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}

