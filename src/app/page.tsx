// pages/index.tsx

import Post from "@/components/post/page";

const HomePage = () => {
  const posts = [
    {
      title: 'The Future of Web Development',
      content: 'Web development is evolving rapidly. In this article, we explore the key trends shaping the future of web technologies...',
      author: 'John Doe',
      date: '2024-09-19',
      imageUrl: '/images/user-avatar-icon.png',
    },
    {
      title: 'Understanding React Hooks',
      content: 'React Hooks have changed the way we write components. This article dives deep into the most commonly used hooks, their purpose, and how they simplify component logic...',
      author: 'Jane Smith',
      date: '2024-09-17',
      imageUrl: '/images/user-avatar-icon.png',
    },
    {
      title: 'A Guide to TypeScript',
      content: 'TypeScript offers a powerful type system that helps catch errors early in development. Learn why TypeScript is becoming the go-to choice for modern JavaScript development...',
      author: 'Mike Johnson',
      date: '2024-09-15',
      imageUrl: '/images/user-avatar-icon.png',
    },
  ];

  return (
    <div className="container mx-auto py-8 mt-[90px]">
      <h1 className="text-4xl font-bold text-center mb-8">Latest Blog Posts</h1>
      {posts.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          content={post.content}
          author={post.author}
          date={post.date}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
};

export default HomePage;
