import React from 'react';

export default class ItemsPreview extends React.Component {
  render() {

    let entry = this.props.entry;
    let it1 = entry.getIn(['data', 'it1']);
    let it2 = entry.getIn(['data', 'it2']);
    let picture = entry.getIn(['data', 'picture']);
    let bg = this.props.getAsset(picture);
    console.log(bg)

    return (
      <div>
        Modified version
        <ul>
          <li>{it1}</li>
          <li>{it2}</li>
          <img height="200" width="200" src={bg} />
          
        </ul>
      </div>
    )
  }
}