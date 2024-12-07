import useAuth from "../../hooks/useAuth";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const PostModal = () => {
  const { isOpenPostModal, setIsOpenPostModal } = useAuth();
  return (
    <div>
      <Dialog
        open={isOpenPostModal}
        onClose={() => setIsOpenPostModal(false)}
        className='relative z-50'>
        <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
          <DialogPanel className='max-w-lg space-y-4 border bg-white p-12'>
            <DialogTitle className='font-bold'>Deactivate account</DialogTitle>
            <Description>
              This will permanently deactivate your account
            </Description>
            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed.
            </p>
            <div className='flex gap-4'>
              <button onClick={() => setIsOpenPostModal(false)}>Cancel</button>
              <button onClick={() => setIsOpenPostModal(false)}>
                Deactivate
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default PostModal;
