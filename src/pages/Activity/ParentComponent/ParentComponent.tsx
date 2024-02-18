import React, { useState } from 'react';
import OffcanvasMenu from '.././OffCanvas/OffCanvasMenu'; // OffcanvasMenu component'inizin yolu

const ParentComponent = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffCanvas = () => setShowOffcanvas(!showOffcanvas);

  return (
    <div>
      <div className="ant-space-item">
        <button
          type="button"
          className="ant-btn ant-btn-default ant-btn-lg ant-btn-block btn"
          onClick={toggleOffCanvas}
        >
          <span>DETAY</span>
        </button>
      </div>

      <OffcanvasMenu show={showOffcanvas} handleClose={() => setShowOffcanvas(false)} />
    </div>
  );
};

export default ParentComponent;
