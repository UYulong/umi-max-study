import React from 'react';
import { connect } from '@umijs/max';
import { Button } from 'antd'

const DvaOp: React.FC = (props: any) => {
  const handleIncreat = () => {
    props.dispatch({
      type: 'count/add',
      payload: 2,
    })
  }

  return (
    <div>
      <p>{props.count}</p>
      <Button onClick={handleIncreat}>增加</Button>
    </div>
  )
}

const mapModelToProps = ({ count }: any) => {
  return {
    count: count.count
  }
}
export default connect(mapModelToProps)(DvaOp);