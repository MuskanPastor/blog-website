import React, { useState, useEffect } from 'react';

const LikeButton = ({ blogId }) => {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem(`likes-${blogId}`)) || 0;
    setLikes(storedLikes);
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts')) || {};
    setHasLiked(likedPosts[blogId] || false);
  }, [blogId]);

  const handleLike = () => {
    if (!hasLiked) {
      const updatedLikes = likes + 1;
      setLikes(updatedLikes);
      localStorage.setItem(`likes-${blogId}`, JSON.stringify(updatedLikes));

      const likedPosts = JSON.parse(localStorage.getItem('likedPosts')) || {};
      likedPosts[blogId] = true;
      localStorage.setItem('likedPosts', JSON.stringify(likedPosts));

      setHasLiked(true);
    }
  };

  return (
    <div className="like-button mt-4">
      <button
        className="flex items-center text-red-900"
        onClick={handleLike}
        disabled={hasLiked}
        aria-label="Like"
      >
        <img src="/images/like.png" alt="Like" className="w-8  h-8 mr-2" />
        Likes ({likes})
      </button>
      {hasLiked && <p className="text-sm text-gray-500 mt-2">You have liked this post.</p>}
    </div>
  );
};

export default LikeButton;
