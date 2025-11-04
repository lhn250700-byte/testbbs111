import React, { useEffect, useState } from 'react';
import supabase from '../../utils/supabase';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { usePost } from '../../context/PostContext';

const ModifyComp = () => {
  const { fetch: refresh } = usePost();

  const { id } = useParams();
  const nav = useNavigate();
  const [formData, setFormData] = useState({ title: '', content: '', name: '' });
  const eventHandler = (e) => {
    const { value, name } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const fetch1 = async () => {
    try {
      const { data, error } = await supabase.from('posts').select('*').eq('id', Number(id)).single();
      setFormData({ ...data });

      if (error) console.error('error!', error);
    } catch (err) {}
  };

  const fetch = async () => {
    try {
      const { error } = await supabase
        .from('posts')
        .update({ title: formData.title, content: formData.content, name: formData.name })
        .eq('id', id);
      if (error) console.error('error!', error);
      else {
        nav('/board/list');
        refresh();
      }
    } catch (err) {}
  };

  const submitHandler = (e) => {
    if (formData.name.trim() && formData.title.trim() && formData.content.trim()) {
      fetch();
      e.preventDefault();
    } else if (!formData.name.trim()) {
      alert('작성자명을 입력하세요');
      e.preventDefault();
    } else if (!formData.title.trim()) {
      alert('제목을 입력하세요');
      e.preventDefault();
    } else {
      alert('내용을 입력하세요');
      e.preventDefault();
    }
  };
  useEffect(() => {
    fetch1();
  }, []);

  return (
    <div>
      <h3>글 작성</h3>
      <form onSubmit={submitHandler}>
        <div className="d-flex flex-column gap-3 mb-3">
          <input
            name="name"
            id="name"
            type="text"
            className="form-control"
            placeholder="작성자명을 쓰세요."
            onChange={eventHandler}
            disabled={true}
            value={formData.name}
          />
          <input
            name="title"
            id="title"
            type="text"
            className="form-control"
            placeholder="제목"
            onChange={eventHandler}
            value={formData.title}
          />
          <textarea
            name="content"
            id="content"
            className="form-control"
            placeholder="내용을 입력하세요."
            onChange={eventHandler}
            rows="5"
            value={formData.content}
          ></textarea>
        </div>
        <div className="d-flex justify-content-end gap-2">
          <Link to={`/board/view/${id}`} className="btn btn-danger">
            취소
          </Link>
          <button className="btn btn-primary">수정 완료</button>
        </div>
      </form>
    </div>
  );
};

export default ModifyComp;
