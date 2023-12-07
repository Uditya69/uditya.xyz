// pages/index.tsx
"use client"
import Feed from './feed';

const HomePage: React.FC = () => {
  return (
    <div className='mt-10 mb-10 scroll-smooth '>
      <Feed />
    </div>
  );
};

export default HomePage;
