// comments.ts

export const fetchComments = async (): Promise<string[]> => {
  // Fetch comments from an API endpoint or any other source
  const response = await fetch('https://api.example.com/comments');
  if (!response.ok) {
    throw new Error('Failed to fetch comments');
  }
  const data = await response.json();
  return data.comments;
};

export const postComment = async (comment: string): Promise<void> => {
  // Post comment to an API endpoint or any other source
  const response = await fetch('https://list.jessejesse.workers.dev', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ comment }),
  });
  if (!response.ok) {
    throw new Error('Failed to post comment');
  }
};
