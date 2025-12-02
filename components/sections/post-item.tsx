import { Post } from "@/types/posts";
import { Fragment, memo, useState } from "react";
import CardPost from "../card/card-post";

const PostItem = ({ item }: { item: Post }): React.ReactElement => {
  const [showReplies, setShowReplies] = useState<boolean>(false);
  const showRepliesHandler = () => {
    setShowReplies(!showReplies);
  };
  return (
    <Fragment>
      <CardPost item={item} repliesHandler={showRepliesHandler} />
      {item.stats.comments > 0 && (
        <Fragment>
          {showReplies && (
            <div className="h-auto w-full pl-10">
              {item.replies.map((reply) => (
                <CardPost item={reply} />
              ))}
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default memo(PostItem);
