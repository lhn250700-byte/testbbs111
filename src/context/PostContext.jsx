import { createContext, useContext, useEffect, useState } from 'react';
import supabase from '../utils/supabase';

const PostContext = createContext();

export const usePost = () => {
  const context = useContext(PostContext);
  if (!context) throw new Error('이 훅은 Provider 안에 있어야 합니다.');
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from('posts').select().order('id', { ascending: false });
      if (error) console.error(error);
      else setPosts(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const value = {
    posts,
    fetch,
    loading,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
