export const Comment = ({
  commentId,
  comment,
  userId,
  users,
  loggedInUserId,
}) => {
  const findUserName = (userId) => {
    const foundUser = users.find((user) => user.id === userId);
    return foundUser?.fullName;
  };

  const handleEdit = (e) => {
    e.preventDefault();
  };

  const handleDelete = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="w-600 center single-comment" key={commentId}>
        <img
          className="comment-avatar"
          src="https://ionicframework.com/docs/img/demos/avatar.svg"
        ></img>
        <div className="comment">
          <div className="comment-title">
            <div className="user-name">{findUserName(userId)}</div>
            {loggedInUserId === userId ? (
              <>
                <div>
                  <button
                    className=" border-none border-bottom mr-5 hover:pointer-cursor"
                    onClick={(click) => handleEdit(click)}
                  >
                    Edit
                  </button>
                  <button
                    className="border-none border-bottom mr-5 hover:pointer-cursor"
                    onClick={(click) => handleDelete(click)}
                  >
                    Delete
                  </button>
                </div>
              </>
            ) : (
              ""
            )}
          </div>

          {comment}
        </div>
      </div>
    </>
  );
};
