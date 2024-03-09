//app/index.tsx

import { useState, useEffect } from 'react';
import { fetchComments } from '../comments';
import CommentsForm from '../components/CommentsForm';

const HomePage: React.FC = () => {
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    const fetchCommentsData = async () => {
      try {
        const data = await fetchComments();
        setComments(data);
      } catch (error) {
        console.error('Error fetching comments:', error);
        // Handle error appropriately
      }
    };
    fetchCommentsData();
  }, []);

  return (
    <div>
      <h1>Comments</h1>
      <CommentsForm />
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
