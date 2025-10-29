import React, { useEffect, useState } from 'react';
import supabase from '../../utils/supabase';
import { Link } from 'react-router-dom';

const ListComp = ({ posts }) => {
  console.log(posts);

  return (
    <div>
      <h3>글 목록</h3>
      <table className="table table-hover border my-3">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              #
            </th>
            <th scope="col">title</th>
            <th scope="col">name</th>
            <th scope="col">created</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((v, i) => {
            return (
              <tr key={i}>
                <th scope="row" className="border text-center">
                  {v.user_id}
                </th>
                <td>
                  <Link to={`/board/view/${v.user_id}`}>{v.title}</Link>
                </td>
                <td>{v.name}</td>
                <td>{v.created_at.split('T')[0]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListComp;
