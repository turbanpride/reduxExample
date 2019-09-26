import React,{Component} from 'react';
import './Pagination.scss';
import FontAwesome from 'react-fontawesome';

class Pagination extends Component
{
    render()
    {
        return(
            <div className="pagination-wrapper">
                <span className="paginationPages-title">Pages</span>
                <span>
                <p className="paginator">1</p>
                <p className="paginator">2</p>
                <p className="paginator">3</p>
                <p className="paginator">4</p>
                <p className="paginator">5</p>
                </span>
                <span className="paginator paginator-ellipsis">..</span>
                <span className="paginationPages-next">Next</span>
                <FontAwesome name="angle-right"/>
                <FontAwesome name="angle-right"/>
            </div>
        );
    }
}

export default Pagination;