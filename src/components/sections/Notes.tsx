import { useState } from 'react';

type BlogPost = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'From Electrician to Developer: Lessons in Problem-Solving',
    date: 'October 2024',
    excerpt: 'How my background in electrical work shaped my approach to debugging and systematic thinking in software development.',
    content: `Starting my career as an electrician taught me invaluable lessons about systematic problem-solving that directly apply to software development. When troubleshooting an electrical system, you learn to think methodically: check the power source, trace the circuit, test components one by one.

This same approach works perfectly for debugging code. Start with the basics, trace the data flow, isolate components, and test incrementally. The patience required to track down a faulty wire in a complex building is the same patience needed to find a bug in a large codebase.

Both fields require understanding complex systems, reading technical diagrams (schematics vs. architecture diagrams), and most importantly, knowing when to ask for help and consult documentation.`,
    tags: ['career', 'learning', 'problem-solving']
  },
  {
    id: 2,
    title: 'Building Accessible React Components: A Practical Guide',
    date: 'September 2024',
    excerpt: 'Accessibility shouldn\'t be an afterthought. Here are practical patterns for building inclusive React components from the start.',
    content: `Accessibility in React isn't just about adding ARIA attributes—it's about semantic HTML, keyboard navigation, screen reader support, and thoughtful user experience design.

Start with semantic HTML elements. Use <button> for buttons, <nav> for navigation, <main> for main content. These elements come with built-in accessibility features that you'd otherwise have to recreate.

For interactive components, ensure keyboard navigation works: Tab to move forward, Shift+Tab to move back, Enter/Space to activate. Test with your keyboard before adding any mouse functionality.

Use ARIA attributes to enhance, not replace, semantic HTML. aria-label, aria-expanded, and aria-hidden are useful, but they should complement good HTML structure, not compensate for poor choices.

Always test with a screen reader. It's the only way to truly understand how accessible your site is.`,
    tags: ['accessibility', 'react', 'best-practices']
  },
  {
    id: 3,
    title: 'Home Automation with Home Assistant: A Developer\'s Perspective',
    date: 'August 2024',
    excerpt: 'Combining electrical knowledge with programming to create a smart, energy-efficient living space.',
    content: `Home automation sits at the perfect intersection of my electrical background and development skills. Home Assistant provides a powerful platform for integrating IoT devices, creating automation rules, and optimizing energy usage.

The key is starting small. Begin with one room or one specific automation. Monitor energy usage, automate lighting based on occupancy and natural light, or create climate control routines that optimize comfort and efficiency.

From a technical perspective, Home Assistant's YAML configuration is developer-friendly, and the ability to write custom automations in Python or Node-RED provides endless possibilities. The local-first approach also means better privacy and reliability compared to cloud-dependent solutions.

My electrical background helps with understanding power requirements, wiring smart switches correctly, and ensuring everything is safely integrated into the home's electrical system.`,
    tags: ['iot', 'home-automation', 'home-assistant']
  },
  {
    id: 4,
    title: 'Performance Optimization in Next.js Applications',
    date: 'July 2024',
    excerpt: 'Practical techniques for improving load times, reducing bundle size, and creating faster user experiences.',
    content: `Performance isn't just about speed—it's about user experience, accessibility, and sustainability. A faster website uses less energy, works better on slower devices, and provides better experiences for all users.

Key Next.js optimizations:

1. Image Optimization: Use next/image for automatic optimization, responsive images, and lazy loading. It makes a huge difference.

2. Code Splitting: Leverage dynamic imports for components that aren't needed on initial load. Load heavy components only when needed.

3. Server Components: Use React Server Components to reduce client-side JavaScript. Render what you can on the server.

4. Font Optimization: Use next/font to eliminate layout shift and optimize font loading.

5. Analyze Your Bundle: Use next/bundle-analyzer to identify heavy dependencies and opportunities for optimization.

Remember: measure before and after. Use Lighthouse, WebPageTest, or real user monitoring to validate your optimizations.`,
    tags: ['performance', 'next.js', 'optimization']
  },
  {
    id: 5,
    title: 'Tech for Good: Building Tools for Non-Profits',
    date: 'June 2024',
    excerpt: 'Lessons learned from developing web applications for community organizations with limited budgets.',
    content: `Building tools for non-profits requires a different mindset than commercial development. The focus is on maximum impact with minimal resources, simplicity over features, and sustainability over rapid iteration.

Key considerations:

1. Keep it simple. Non-profits often have limited technical support. The best tool is one they can use without extensive training.

2. Mobile-first. Volunteers and community members primarily use mobile devices.

3. Low or no hosting costs. Leverage free tiers of services like Vercel, Netlify, or Supabase. Every dollar saved on hosting is a dollar for the mission.

4. Accessibility is crucial. Many non-profits serve communities with diverse needs. Building accessible tools isn't optional.

5. Sustainability. The tool should work for years without constant maintenance. Choose stable, well-supported technologies.

These projects are some of the most rewarding work I do. The impact is direct and meaningful.`,
    tags: ['non-profit', 'impact', 'community']
  },
  {
    id: 6,
    title: 'TypeScript Patterns I Use Daily',
    date: 'May 2024',
    excerpt: 'Practical TypeScript patterns that improve code quality, catch bugs early, and make refactoring safer.',
    content: `TypeScript has transformed how I write JavaScript. Here are patterns I use in almost every project:

1. Union Types for State: Instead of boolean flags, use union types to represent different states explicitly. 'loading' | 'success' | 'error' is clearer than isLoading and hasError.

2. Type Guards: Create custom type guard functions to safely narrow types. This makes your code more predictable and catches errors at compile time.

3. Utility Types: Use Partial, Pick, Omit, and Record to transform types. They're incredibly powerful for creating flexible, reusable type definitions.

4. Discriminated Unions: When handling different types of data, use a common property (like 'type') to discriminate between variants. TypeScript will narrow types automatically.

5. Const Assertions: Use 'as const' to create readonly types and narrow literal types. Perfect for configuration objects.

The goal isn't to type everything perfectly—it's to catch errors early and make refactoring safer.`,
    tags: ['typescript', 'patterns', 'best-practices']
  }
];

export function Notes() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  return (
    <div className="bg-white h-[740px] relative rounded-[2px] shrink-0 w-full max-w-[1081px]" data-name="main">
      <div className="h-[740px] not-italic overflow-clip relative rounded-[inherit] w-full">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] left-[calc(50%-40px)] text-[30px] text-neutral-800 text-nowrap top-[90px] tracking-[-0.225px] whitespace-pre">notes</p>
        <div className="absolute left-[182px] right-[182px] top-[151px] bottom-[50px] overflow-auto">
          {selectedPost === null ? (
            <div className="space-y-[24px]">
              {blogPosts.map((post) => (
                <button
                  key={post.id}
                  onClick={() => setSelectedPost(post.id)}
                  className="w-full text-left border-l-2 border-gray-300 pl-[20px] hover:border-gray-400 transition-colors cursor-pointer"
                >
                  <h3 className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] text-[18px] text-neutral-800 mb-[4px]">
                    {post.title}
                  </h3>
                  <p className="font-['Inter:Light',_sans-serif] font-light leading-[10px] lowercase text-[12px] text-gray-600 mb-[8px]">
                    {post.date}
                  </p>
                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[22px] text-[14px] text-neutral-700 mb-[10px]">
                    {post.excerpt}
                  </p>
                  <div className="flex gap-[8px] flex-wrap">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="font-['Inter:Light',_sans-serif] font-light leading-[10px] lowercase text-[12px] text-gray-600 bg-gray-100 px-[8px] py-[4px] rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div>
              {(() => {
                const post = blogPosts.find(p => p.id === selectedPost);
                if (!post) return null;
                return (
                  <>
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] lowercase text-[14px] text-gray-500 hover:text-gray-700 mb-[24px] transition-colors"
                    >
                      ← back to all notes
                    </button>
                    <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[32px] text-[24px] text-neutral-800 mb-[8px]">
                      {post.title}
                    </h2>
                    <p className="font-['Inter:Light',_sans-serif] font-light leading-[10px] lowercase text-[12px] text-gray-600 mb-[20px]">
                      {post.date}
                    </p>
                    <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[28px] text-[16px] text-neutral-800 space-y-[16px] mb-[20px]">
                      {post.content.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="flex gap-[8px] flex-wrap">
                      {post.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="font-['Inter:Light',_sans-serif] font-light leading-[10px] lowercase text-[12px] text-gray-600 bg-gray-100 px-[8px] py-[4px] rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          )}
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

export function NotesMobile() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-[2px] h-full overflow-auto" data-name="main">
      <div className="box-border content-stretch flex flex-col gap-[11px] items-center not-italic overflow-clip px-[8px] py-[10px] relative rounded-[inherit] w-full text-neutral-800">
        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] relative shrink-0 text-[30px] text-center tracking-[-0.225px] w-full">notes</p>
        <div className="css-7uevq9 font-['Inter:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">
          {selectedPost === null ? (
            <div className="space-y-[20px]">
              {blogPosts.map((post) => (
                <button
                  key={post.id}
                  onClick={() => setSelectedPost(post.id)}
                  className="w-full text-left border-l-2 border-gray-300 pl-[12px] hover:border-gray-400 transition-colors cursor-pointer"
                >
                  <h3 className="text-[16px] leading-[22px] mb-[4px]">
                    {post.title}
                  </h3>
                  <p className="font-['Inter:Light',_sans-serif] font-light text-[11px] text-gray-600 mb-[6px]">
                    {post.date}
                  </p>
                  <p className="text-[14px] leading-[20px] text-neutral-700 mb-[8px]">
                    {post.excerpt}
                  </p>
                  <div className="flex gap-[6px] flex-wrap">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="font-['Inter:Light',_sans-serif] font-light text-[11px] text-gray-600 bg-gray-100 px-[6px] py-[2px] rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div>
              {(() => {
                const post = blogPosts.find(p => p.id === selectedPost);
                if (!post) return null;
                return (
                  <>
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] lowercase text-[13px] text-gray-500 mb-[20px] transition-colors"
                    >
                      ← back to all notes
                    </button>
                    <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[28px] text-[20px] text-neutral-800 mb-[6px]">
                      {post.title}
                    </h2>
                    <p className="font-['Inter:Light',_sans-serif] font-light text-[11px] text-gray-600 mb-[16px]">
                      {post.date}
                    </p>
                    <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] text-[15px] text-neutral-800 space-y-[14px] mb-[16px]">
                      {post.content.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="flex gap-[6px] flex-wrap">
                      {post.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="font-['Inter:Light',_sans-serif] font-light text-[11px] text-gray-600 bg-gray-100 px-[6px] py-[2px] rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          )}
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}
