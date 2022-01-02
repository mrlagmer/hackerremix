//create a react component to display a single comment
export default function ChildComment({ comment }) {
  return (
    <div
      variant="subtle"
      className="drac-box drac-text drac-line-height drac-card drac-text-green drac-card-subtle drac-border-green drac-bg-green drac-p-md drac-m-md mt-4 ml-12"
    >
      <p dangerouslySetInnerHTML={{ __html: comment.text }}></p>
    </div>
  );
}
