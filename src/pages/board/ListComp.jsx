import React, { useEffect, useState } from 'react';
import supabase from '../../utils/supabase';
import { Link } from 'react-router-dom';
import dayjs, { Dayjs } from 'dayjs';

const ListComp = ({ posts }) => {
  return (
    <div>
      <h3>글 목록</h3>
      <table className="table table-hover border my-3">
        <thead>
          <tr>
            <th scope="col" className="text-center" style={{ width: '30px' }}>
              #
            </th>
            <th scope="col">title</th>
            <th scope="col">name</th>
            <th scope="col">created Date</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((v, i) => {
            return (
              <tr key={i}>
                <th scope="row" className="border text-center">
                  {posts.length - i}
                </th>
                <td>
                  <Link to={`/board/view/${v.user_id}`}>{v.title}</Link>
                </td>
                <td>{v.name}</td>
                <td>{dayjs(v.created_at).format('YY.MM.DD')}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-flex justify-content-end gap-2">
        <Link to="/board/write" className="btn btn-primary">
          글 작성
        </Link>
      </div>
    </div>
  );
};

export default ListComp;
