import React from 'react';
import {usePagination} from "../../../hooks/usePagination.ts";

const Pagination = ({page, changePage, totalPages}) => {
    const pagesArray = usePagination(totalPages)
    return (
        <div className="page__wrapper">
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}
                >
                        {p}
                    </span>
            )}
        </div>
    );
};

export default Pagination;