export const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) throw new Error("Error Fetching Data");
  return response.json();
};

export const createPost = async (newPost) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  });

  return response.json();
};
