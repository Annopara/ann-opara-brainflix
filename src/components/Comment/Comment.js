import "./Comment.scss";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import formatDate from "../../utils/timestampDate";
import avatarImg from "../../assets/Images/Mohan-muruge.jpg";
import upload from "../../assets/Icons/add_comment.svg";
import { useParams } from "react-router-dom";

const Comment = ({ allVideos }) => {
  const { videoId } = useParams();

  const video = allVideos.find((video) => video.id === videoId) || {};
  // const { comments } = video;
  console.log(video.comments);

  const clickHandler = (e) => {
    if (e) e.preventDefault();
  };

  return (
    <>
      <div className='comment__all'>
        <section className='comment'>
          <div className='comment__length'>
            {video.comments?.length || 0} Comments
          </div>

          <section className='comment__field'>
            <Avatar src={avatarImg} className='comment__img' />
            <section className='comment__right'>
              <form className='comment__form' onSubmit={(e) => clickHandler(e)}>
                <h3 className='comment__label'>JOIN THE CONVERSATION</h3>
                <div className='comment__div'>
                  <textarea
                    className='comment__textarea'
                    placeholder='Add a new comment'
                  ></textarea>
                  <Button src={upload} btnText='COMMENT' />
                </div>
              </form>
            </section>
          </section>
        </section>

        {/* List of Comments */}
        <section className='post'>
          {video.comments &&
            video.comments.map((comment) => (
              <section className='comment__li' key={comment.id}>
                <div className='post__container'>
                  <div className='post__img-div'>
                    <div className='post__img'></div>
                  </div>

                  <section className='post__right'>
                    <section className='post__top'>
                      <h3 className='post__title'>{comment.name}</h3>
                      <p className='post__date'>
                        {formatDate(new Date(comment.timestamp))}
                      </p>
                    </section>
                    <p className='post__text'>{comment.comment}</p>
                  </section>
                </div>
              </section>
            ))}
        </section>
      </div>
    </>
  );
};

export default Comment;
