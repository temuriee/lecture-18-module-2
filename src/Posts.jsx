import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "./api/api";

const Posts = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    // staleTime: 5000,
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error Fetching Posts</div>;

  return (
    <div>
      {data.map((posts) => (
        <ul key={posts.id}>
          <li>{posts.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default Posts;
