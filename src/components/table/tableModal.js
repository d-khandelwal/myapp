import { useState } from "react";
import { Modal, Button } from 'antd';

function TableModal() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="action-block" onClick={showModal}>Action</div>
      <Modal
        title="Edit"
        visible={isModalVisible}
        onCancel={handleCancel}>

        <div className="modal-container">
          <div className="form-group">
            <label className="label">Item 1</label>
            <input className="input" type="text" placeholder="item" />
          </div>
          <div className="form-group">
            <label className="label">Item 2</label>
            <input className="input" type="text" placeholder="item" />
          </div>
          <div className="form-group">
            <label className="label">Item 2</label>
            <input className="input" type="text" placeholder="item" />
          </div>
          <div className="form-group">
            <label className="label">Options:</label>
            <div className=""></div>
          </div>
        </div>
      </Modal>
    </>
  )
}
export default TableModal;