export default function Comment({ comment, type }) {
  const childComments = (comment?.childComments || []).map((childComment) => {
    return (
      <Comment key={childComment.id} comment={childComment} type="child" />
    );
  });
  return (
    <div className="mt-4 ml-8">
      <div
        variant="subtle"
        className={`drac-box drac-text drac-line-height drac-card drac-text-white drac-card-subtle ${
          type === "child" ? "drac-border-green" : "drac-border-pink"
        }  drac-bg-pink drac-p-md drac-m-md`}
      >
        <p dangerouslySetInnerHTML={{ __html: comment.text }}></p>
      </div>
      {childComments}
    </div>
  );
}
