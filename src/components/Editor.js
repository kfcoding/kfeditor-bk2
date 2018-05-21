/**
 * Created by zhangliqing on 2018/5/12.
 */

import React from 'react';

<<<<<<< HEAD
import CannerEditor from 'kf-slate-editor';
import './fontawesome.min.css';
=======
// import CannerEditor from 'kf-slate-editor';

>>>>>>> 0d3612c8576764a77eeacbfaeacebf006f0cde61

class Editor extends React.Component{
  // Set the initial state when the app is first constructed.
  state = {
    value: this.props.content
  }


  render() {
    const {value} = this.state;
    const onChange = ({value}) => this.setState({value});

    return (
      <div style={{margin: '20px'}}>
        {/*<CannerEditor*/}
          {/*value={value}*/}
          {/*onChange={onChange}*/}
        {/*/>*/}
      </div>
    );
  }
}

export default Editor
