const PostFrom = () => {
    return (
        <div>
            <form className="space-y-4">
                <textarea className="textarea textarea-bordered w-full min-h-52" placeholder="What's your activities write here....."></textarea>
                <input type="file" className="file-input file-input-bordered file-input-error w-full max-w-xs" />
            </form>
        </div>
    );
};

export default PostFrom;