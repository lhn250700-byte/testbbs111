import React, { useEffect, useState } from 'react';
import supabase from '../../utils/supabase';
import { useNavigate, useParams } from 'react-router-dom';

const ModifyComp = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [formData, setFormData] = useState({ title: '', content: '', name: '' });
  const eventHandler = (e) => {
    const { value, name } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const fetch1 = async () => {
    try {
      const { data, error } = await supabase.from('posts').select('*').eq('id', Number(id)).single();
      setFormData({ ...data });
    } catch (error) {
      console.error('error!', error);
    }
  };

  const fetch = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .update({ title: formData.title, content: formData.content, name: formData.name })
        .eq('id', id)
        .select();
      data;
    } catch (error) {
      console.log('error', error);
    }
  };

  const submitHandler = (e) => {
    if (formData.name.trim() && formData.title.trim() && formData.content.trim()) {
      fetch();
      e.preventDefault();
      nav('/board/list');
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
            style={{ height: '200px' }}
            value={formData.content}
          ></textarea>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary">수정 완료</button>
        </div>
      </form>
    </div>
  );
};

export default ModifyComp;
