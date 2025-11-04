import React, { useEffect, useState } from 'react';
import supabase from '../../utils/supabase';
import { Link, NavLink } from 'react-router-dom';
import dayjs from 'dayjs';
import { usePost } from '../../context/PostContext';

const ListComp = () => {
  const { posts } = usePost();
  // 페이지네이션 미완
  // const [page, setPage] = useState(1);
  // const listCnt = 10;
  // const pagerCnt = 3;
  // const totalRecord = posts.length;
  // const startIdx = (page - 1) * listCnt;
  // const totalPage = Math.ceil(totalRecord / listCnt); // 4
  // const startPage = Math.floor((page - 1) / pagerCnt) + 1;
  // const endPage = startPage + pagerCnt - 1;
  // const arr = [1, 2, 3];

  // const leftClick = () => {
  //   if (startPage !== 1) setPage(startPage - 1);
  // };

  // const rightClick = () => {
  //   if (endPage !== totalPage) setPage(endPage + 1);
  // };
  // console.log(startPage);
  // console.log(endPage);
  // console.log(totalPage);
  // posts = posts.slice(startIdx, startIdx + 10);

  const clickHandler = (e) => {
    console.log(e.target.innerText);
  };
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
                  <Link to={`/board/view/${v.id}`}>{v.title}</Link>
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
      {/* <nav aria-label="Page navigation" className="d-flex justify-content-center my-5">
        <ul className="pagination">
          <li className="page-item" onClick={leftClick}>
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>
          {arr.map((v, i) => {
            return (
              <li className="page-item" key={i}>
                <NavLink to={`/board/list/${startPage + i}`} className="page-link" onClick={clickHandler}>
                  {startPage + i}
                </NavLink>
              </li>
            );
          })}
          <li className="page-item" onClick={rightClick}>
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default ListComp;
