import React from 'react';

const IconSearch = () => ({
  render() {
    return (
      <svg className="overlay__search" width={this.props.width} height={this.props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <title>search</title>
        <path fill={this.props.searchfill} d="M7.012 3c2.193 0 3.977 1.794 3.977 4 0 0.831-0.255 1.63-0.737 2.312l-0.392 0.553-0.55 0.393c-0.678 0.485-1.473 0.742-2.298 0.742-2.193 0-3.977-1.794-3.977-4s1.784-4 3.977-4zM7.012 1c-3.295 0-5.966 2.686-5.966 6s2.671 6 5.966 6c1.288 0 2.477-0.414 3.451-1.112l4.791 4.819c0.195 0.196 0.45 0.293 0.705 0.293s0.51-0.098 0.704-0.293c0.389-0.391 0.389-1.025 0-1.416l-4.791-4.819c0.694-0.98 1.105-2.177 1.105-3.471 0-3.314-2.671-6-5.965-6v0z"></path>
      </svg>
    );
  }
});

export default IconSearch;