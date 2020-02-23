/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import _ from "lodash"
import { Paginate } from './pagination.style';

const Pagination = props => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props

  const pagesCount = Math.ceil(itemsCount / pageSize)
  if (pagesCount === 1) return null
  const pages = _.range(1, pagesCount + 1)

  return (
    <nav>
      <Paginate>
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "active" : ""}
          >
            <a onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </Paginate>
    </nav>
  )
}

export default Pagination
