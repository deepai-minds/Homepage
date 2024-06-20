// src/components/Blog.js
import React from 'react';
import styled from 'styled-components';

const BlogWrapper = styled.section`
  padding: 50px 20px;
  background-color: white;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 1em;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const BlogPost = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-10px);
  }
`;

const PostTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 0.5em;
`;

const PostDescription = styled.p`
  font-size: 1em;
  margin: 0.5em 0;
`;

const Blog = () => (
  <BlogWrapper id="blog">
    <Title>From Our Blog</Title>
    <BlogGrid>
      <BlogPost>
        <PostTitle>How AI is Changing the Future of Business</PostTitle>
        <PostDescription>A comprehensive guide to understanding the impact of AI on various industries.</PostDescription>
      </BlogPost>
      <BlogPost>
        <PostTitle>5 AI Trends to Watch in 2024</PostTitle>
        <PostDescription>Stay ahead of the curve with these top AI trends that will dominate the market.</PostDescription>
      </BlogPost>
    </BlogGrid>
  </BlogWrapper>
);

export default Blog;
