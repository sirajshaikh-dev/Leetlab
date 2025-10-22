import { X } from "lucide-react";
import { useForm } from "react-hook-form";

const CreatePlaylistModal = ({ ModalRef, closeModal, onSubmit }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const handleFormSubmit = async (data) => {
    await onSubmit(data);
    reset();
    closeModal();
  };

  return (
    <dialog ref={ModalRef} className="modal">
      <div className="modal-box w-full max-w-md p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Create New Playlist</h3>
          <button
            type="button"
            onClick={closeModal}
            className="btn btn-sm btn-circle btn-ghost"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="space-y-5"
        >
          {/* Playlist Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Playlist Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter playlist name"
              className={`input input-bordered w-full ${errors.name ? "input-error" : ""}`}
              {...register("name", { required: "Playlist name is required" })}
            />
            {errors.name && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors.name.message}
                </span>
              </label>
            )}
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Description</span>
            </label>
            <textarea
              placeholder="Enter playlist description (optional)"
              className="textarea textarea-bordered h-24 resize-none w-full"
              {...register("description")}
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={closeModal}
              className="btn btn-ghost"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </div>
        </form>
      </div>

      {/* Overlay close behavior */}
      <form method="dialog" className="modal-backdrop">
        <button aria-label="Close modal"></button>
      </form>
    </dialog>
  );
};

export default CreatePlaylistModal;
