import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import supabase from '../../utils/supabase';

const WriteComp = ({ refresh }) => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({ title: '', content: '', name: '' });
  const eventHandler = (e) => {
    const { value, name } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const fetch = async () => {
    try {
      const { error } = await supabase.from('posts').insert({
        title: formData.title,
        name: formData.name,
        content: formData.content,
      });
      if (error) console.error('error', error);
      else {
        nav('/board/list');
        refresh();
      }
    } catch (error) {
      console.log(error);
    }
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
          />
          <input
            name="title"
            id="title"
            type="text"
            className="form-control"
            placeholder="제목"
            onChange={eventHandler}
          />
          <textarea
            name="content"
            id="content"
            className="form-control"
            placeholder="내용을 입력하세요."
            onChange={eventHandler}
            rows={5}
          ></textarea>
        </div>
        <div className="d-flex justify-content-end gap-2">
          <Link to="/board/list" className="btn btn-danger">
            취소
          </Link>
          <button className="btn btn-primary">작성 완료</button>
        </div>
      </form>
    </div>
  );
};

export default WriteComp;
