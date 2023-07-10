import React from 'react';
import { connect } from '@umijs/max'

const DvaData: React.FC = (props: any) => {
  return (
    <div>
      数据展示:
      <p>{props.count}</p>
    </div>
  )
}

const mapModelToProps = ({ count }: any) => {
  return {
    count: count.count
  }
}
export default connect(mapModelToProps)(DvaData);