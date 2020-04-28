import React from 'react';

function Loader() {
  return (
    <div className="loader" style={{ transition: 'all 0.3s ease-in-out' }}>
      <svg
        id="loader_logo"
        width="90"
        height="113"
        viewBox="0 0 90 113"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M84.5625 110.5H87.0625V108V5.625V3.125H84.5625H70.9922H68.4922V5.625V47.1406H21.8828V5.625V3.125H19.3828H5.88281H3.38281V5.625V108V110.5H5.88281H19.3828H21.8828V108V63.1797H68.4922V108V110.5H70.9922H84.5625Z"
          stroke="#64FFDA"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}

export default Loader;
