/*
 * @file component Item
 */
// 加载依赖
import React, { PropTypes } from 'react';

// 属性验证
const propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

// 组件主体，这里是stateless function,所以直接就是一个函数
function ListItem({ item }) {
  // 返回JSX结构
  return (
    <a
      href="#"
      className="list-group-item item-component"
    >
      <span className="label label-default label-pill pull-xs-right">
        {item.time}
      </span>
      {item.title}
    </a>
  );
}

// 添加验证
ListItem.propTypes = propTypes;

// 导出组件
export default ListItem;
