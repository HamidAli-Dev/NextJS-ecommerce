import Modal from "../modal";

const StoreModal = () => {
  return (
    <div>
      <Modal
        title="Modal Title"
        description="Modal Description"
        isOpen={true}
        onClose={() => {}}
      >
        <div>Modal Content</div>
      </Modal>
    </div>
  );
};

export default StoreModal;
