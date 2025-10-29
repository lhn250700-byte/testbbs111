import React from 'react';
import { Link } from 'react-router-dom';

const WriteComp = () => {
  return (
    <div>
      <h3>글 작성</h3>
      <div className="d-flex justify-content-end">
        <Link to="/board/list" className="btn btn-primary">
          작성 완료
        </Link>
      </div>
    </div>
  );
};

export default WriteComp;
