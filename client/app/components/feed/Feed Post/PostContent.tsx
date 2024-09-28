type Props = {
  body: string;
  Postimages?: string[];
};

function PostContent({ body, Postimages }: Props) {
  return (
    <div>
      {/* post content */}
      <div className={"mt-2"}>
        <p className={"text-lg font-medium"}>{body}</p>
      </div>
      <div className={"mt-2"}>{/*  attachments  */}</div>
    </div>
  );
}

export default PostContent;
