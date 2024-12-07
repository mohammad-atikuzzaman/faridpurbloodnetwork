import useAuth from "../../hooks/useAuth";
import {
  //   Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import PostFrom from "../form/PostFrom";

const PostModal = () => {
  const { isOpenPostModal, setIsOpenPostModal } = useAuth();
  return (
    <div>
      <Dialog
        open={isOpenPostModal}
        onClose={() => setIsOpenPostModal(false)}
        className='relative z-50'>
        <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
          <DialogPanel className='max-w-3xl space-y-4 border bg-white p-12 relative rounded-2xl'>
            <div className='text-end absolute right-3 top-3'>
              <button
                className='text-xl hover:bg-gray-100 px-3 py-0.5 rounded-md'
                onClick={() => setIsOpenPostModal(false)}>
                X
              </button>
            </div>
            <DialogTitle className='font-bold text-center'>Create Post</DialogTitle>
            {/* <Description>
              This will permanently deactivate your account
            </Description> */}
            <PostFrom/>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default PostModal;
