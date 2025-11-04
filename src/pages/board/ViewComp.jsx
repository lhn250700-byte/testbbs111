import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import supabase from '../../utils/supabase';
import dayjs from 'dayjs';
import { usePost } from '../../context/PostContext';

const ViewComp = () => {
  const { fetch: refresh } = usePost();
  const { id } = useParams();
  const [posts, setPosts] = useState({ content: '', created: '', name: '', title: '' });
  const [loading, setLoading] = useState(true);
  const fetch = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from('posts').select('*').eq('id', Number(id)).single();
      setPosts({ content: data.content, created: data.created_at.split('T')[0], name: data.name, title: data.title });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const clickHandler = async () => {
    const { error } = await supabase.from('posts').delete().eq('id', id);
    if (error) console.error(error);
    else refresh();
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="border my-3 p-4 rounded">
      {loading ? (
        <div className="spinner-border text-primary load" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : null}
      <h3 className="mb-3">{posts.title}</h3>
      <div className="d-flex justify-content-between mb-5" style={{ borderBottom: '1px solid #ccc' }}>
        <em>{posts.name}</em>
        <p style={{ color: 'grey' }}>{dayjs(posts.created).format('YY.MM.DD')}</p>
      </div>
      <p className="mb-3" style={{ minHeight: '300px' }}>
        {posts.content}
      </p>
      <div className="d-flex justify-content-end gap-2">
        <Link to="/board/list" className="btn btn-primary">
          목록
        </Link>
        <Link to={`/board/modify/${id}`} className="btn btn-primary">
          수정
        </Link>
        <Link to="/board/list" className="btn btn-danger" onClick={clickHandler}>
          삭제
        </Link>
      </div>
    </div>
  );
};

export default ViewComp;
