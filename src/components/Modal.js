function Modal(props) {

  function onCancelModal() {
    props.onCancel()
  }

  function onConfirmModal() {
    props.onConfirm()
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={onCancelModal}>
        Cancel
      </button>
      <button className="btn" onClick={onConfirmModal}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
