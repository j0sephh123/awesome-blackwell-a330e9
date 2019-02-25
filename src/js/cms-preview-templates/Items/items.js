import React from 'react';

export default class ItemsPreview extends React.Component {
  render() {

    let entry = this.props.entry;
    let data = entry.getIn(['data', 'it1']);
    let picture = entry.getIn(['data', 'picture']);
    let bg = this.props.getAsset(picture);
    console.log(bg)

    return (
      <div>
        Modified version
        <ul>
          <img src={bg} />
          
        </ul>
      </div>
    )
  }
}