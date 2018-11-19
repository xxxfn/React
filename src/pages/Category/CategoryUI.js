// 这个是 home ui 组件
import React from 'react';
import './Category.scss';
import Footer from '../../components/Footer';

const CategoryUI = (props) => {
  return (
    <div className="category">
      <div className="elm-home">
        这是发现页
      </div>
      <Footer />
    </div>

  )
}

export default CategoryUI;
