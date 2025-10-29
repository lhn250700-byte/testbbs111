import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import supabase from '../../utils/supabase';

const ViewComp = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState({ content: '', created: '', name: '', title: '' });
  const fetch = async () => {
    try {
      const { data, error } = await supabase.from('posts').select('*').eq('user_id', Number(id)).single();
      setPosts({ content: data.content, created: data.created_at.split('T')[0], name: data.name, title: data.title });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="border my-3 p-4 rounded">
      <h3 className="mb-3">{posts.title}</h3>
      <div className="d-flex justify-content-between mb-5">
        <em>{posts.name}</em>
        <p style={{ color: 'grey' }}>{posts.created}</p>
      </div>
      <p className="mb-3">{posts.content}</p>
      <div className="d-flex justify-content-end">
        <Link to="/board/list" className="btn btn-primary">
          목록
        </Link>
      </div>
    </div>
  );
};

export default ViewComp;
