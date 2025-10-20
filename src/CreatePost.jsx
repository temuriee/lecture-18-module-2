import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useState } from "react";
import { createPost } from "./api/api";

const CreatePost = () => {
  const [title, setTitle] = useState("");

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      console.log("Hello");
    },
  });

  const handleSumbit = (event) => {
    event.preventDefault();

    mutate({ myPostTitle: title });
  };
  return (
    <div className="mb-[100px]">
      <form className="flex flex-col max-w-[200px] ">
        <label htmlFor="title">Provide Name:</label>
        <input
          id="title"
          type="type"
          placeholder="Please Provide Post Name"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <button className="cursor-pointer" onClick={handleSumbit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
