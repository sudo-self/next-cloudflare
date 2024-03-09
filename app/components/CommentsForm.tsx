// components/CommentsForm.tsx

import { useState } from 'react';
import { postComment } from '../comments';

const CommentsForm: React.FC = () => {
  const [comment, setComment] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await postComment(comment);
      setComment('');
      // Optionally, you can trigger a refetch of comments here
    } catch (error) {
      console.error('Error posting comment:', error);
      // Handle error appropriately
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment here..."
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default CommentsForm;

